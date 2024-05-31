"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { POST } from "@/app/api/comments/route";

type Props = {
  postSlug: any;
};

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }
  return data;
};

const Comments = ({ postSlug }: Props) => {
  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `${process.env.NEXTAUTH_URL}/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setNewComment] = useState("");

  const handleSubmission = async () => {
    console.log("desc");
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug })
    });

    // Clear the textarea
    setNewComment("");
    mutate();
  };

  return (
    <div className="py-8 pr-4">
      <h1 className="title text-2xl font-semibold font-mono">Comments</h1>
      {status === "authenticated" ? (
        <div className=" ">
          <textarea
            name="comments"
            placeholder="write a comment ..."
            className="w-full border-solid border-2 border-slate-500 p-2"
            onChange={(e) => setNewComment(e.target.value)}
            value={desc}
          ></textarea>
          <Button onClick={handleSubmission}>Send</Button>
        </div>
      ) : (
        <Link href={"/login"}>Login in to write a comment</Link>
      )}

      <div className="comments ">
        <h1>this is comments for the article {postSlug}</h1>
        {isLoading
          ? "loading"
          : data?.map((item: any) => (
              <div className="comment" key={item._id}>
                <div className="user flex pt-8 ">
                  <div className="userImageContainer px-4">
                    {item?.user?.image && (
                      <img
                        src={item.user.image}
                        alt="fill"
                        className="h-[3rem] w-[3rem] rounded-full object-cover object-center"
                      ></img>
                    )}
                  </div>
                  <div className="userTextContainer text-sm">
                    <span className="">{item.user.name}</span>
                    <br />
                    <span className="">{item.createdAt.substring(0, 10)}</span>
                  </div>
                </div>

                <p className="comment-desc">{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
