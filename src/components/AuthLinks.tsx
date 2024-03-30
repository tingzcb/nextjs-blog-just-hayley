"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, SquareX } from "lucide-react";

type Props = {};

const AuthLinks = (props: Props) => {
  const [open, setOpen] = useState(false);

  const { status } = useSession();

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href={"/login"} className=" items-center gap-2 max-md:hidden">
          <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px]  dark:border-white">
            登录 login1----3
          </p>
        </Link>
      ) : (
        <>
          <Link className="max-md:hidden" href="/write">
            Write1
          </Link>
          <Button
            className="max-md:hidden"
            onClick={() => {
              signOut();
            }}
          >
            Logout1
          </Button>
        </>
      )}

      <div className="burger md:hidden ">
        <Button
          onClick={() => {
            setOpen(!open);
          }}
          variant="outline"
          size="icon"
        >
          {open === false ? (
            <>
              <Menu className="burger-icon h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all  " />
            </>
          ) : (
            <>
              <SquareX className="burger-icon h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all  " />
            </>
          )}
        </Button>
        {open && (
          <div className="responsiveMenu ">
            {" "}
            <Link href={"/"} className="flex items-center gap-2">
              <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px]  dark:border-white">
                Just Hayley
              </p>
            </Link>
            <Link href={"/merchandise"} className="flex items-center gap-2">
              <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px]  dark:border-white">
                商品 merchandise
              </p>
            </Link>
            <Link href={"/myBlog"} className="flex items-center gap-2">
              <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px]  dark:border-white">
                my blog for life
              </p>
            </Link>
            <Link href={"/aboutMe"} className="flex items-center gap-2">
              <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px]  dark:border-white">
                about me
              </p>
            </Link>
            <Link href={"/mailchimp"} className="flex items-center gap-2">
              <p
                className="rounded-lg border-2 
              border-b-4 border-r-4 border-black px-2 py-1 text-xl 
              font-bold transition-all hover:-translate-y-[2px]  dark:border-white"
              >
                订阅 mailchimp
              </p>
            </Link>
            {status === "unauthenticated" ? (
              <Link href="/login">Login1-2</Link>
            ) : (
              <>
                <Link className="flex items-center gap-2" href="/write">
                  <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] dark:border-white">
                    Write A New Blog
                  </p>
                </Link>
                <Button
                  className=""
                  onClick={() => {
                    signOut();
                  }}
                >
                  Logout1-2
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default AuthLinks;
