"use client";

import React from "react";
import store from "@/state/store";
import { Provider } from "react-redux"
import { SessionProvider } from "next-auth/react";

type Props = {
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export const ReduxProvider = ({children}: Props) => {
    return <Provider store={store}>{children}</Provider>;
};