import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

type Props = {};

const Comments = (props: Props) => {
  const status = "authenticated";
  return (
    <div className="py-8 pr-4">
      <h1 className="title text-2xl font-semibold font-mono">Comments</h1>
      {status === "authenticated" ? (
        <div className=" ">
          <textarea
            name="comments"
            placeholder="write a comment ..."
            className="w-full border-solid border-2 border-slate-500 p-2"
          ></textarea>
          <Button>Send</Button>
        </div>
      ) : (
        <Link href={"/login"}>Login in to write a comment</Link>
      )}

      <div className="comments ">
        <div className="comment">
          <div className="user flex pt-8 ">
            <div className="userImageContainer px-4">
              <img
                src="/Island.jpg"
                alt="fill"
                className="h-[3rem] w-[3rem] rounded-full object-cover object-center"
              ></img>
            </div>
            <div className="userTextContainer text-sm">
              <span className="">John Doe</span>
              <br />
              <span className="">01.01.2024</span>
            </div>
          </div>

          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            ab dolores libero consequuntur nihil tenetur non deleniti ipsa!
            Vero, numquam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
