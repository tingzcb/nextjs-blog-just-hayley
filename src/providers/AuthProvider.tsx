"use client";
import React from "react";

import { SessionProvider } from "next-auth/react";

type Props = { children: any };

const AuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
