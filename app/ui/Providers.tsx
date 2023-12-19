"use client";
import { SessionProvider } from "next-auth/react";

// creating a session for user
export const NextAuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <SessionProvider>{children}</SessionProvider>;
};
