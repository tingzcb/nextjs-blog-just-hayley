import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="container  grid grid-rows-3 gap-4 justify-center mt-40 h-80 w-1/2 items-center bg-gray-200">
      <div>
        {" "}
        <Button>Sign in with Google</Button>
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
