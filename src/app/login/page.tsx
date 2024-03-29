"use client";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

type Props = {};

const Login = (props: Props) => {
  const { data, status } = useSession();
  console.log(data, status);
  return (
    <div className="container  grid grid-rows-3 gap-4 justify-center mt-40 h-80 w-1/2 items-center bg-gray-200">
      <div>
        {" "}
        <Button
          onClick={() => {
            signIn("google");
          }}
        >
          Sign in with Google
        </Button>
        {/* <button onClick={() => signOut()}>Sign out</button> */}
      </div>
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
