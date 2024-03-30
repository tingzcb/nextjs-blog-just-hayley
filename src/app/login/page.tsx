"use client";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const Login = (props: Props) => {
  const { data, status } = useSession();
  console.log(data, status);

  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="loading flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="container  grid grid-rows-3 gap-4 justify-center mt-40 h-80 w-1/2 items-center bg-gray-200  dark:bg-slate-800">
      <div>
        {" "}
        <Button
          onClick={() => {
            signIn("google");
          }}
        >
          Sign in with Google
        </Button>
      </div>
      {/* <div className="">
        <Button onClick={() => signOut()}>Sign out</Button>
      </div> */}
      <div>
        {" "}
        <Button>Sign in with Github</Button>
      </div>

      <div>
        {" "}
        <Button> Sign in with Facebook</Button>
      </div>
    </div>
  );
};

export default Login;
