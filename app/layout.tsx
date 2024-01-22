import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "./ui/Providers";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "handOver",
  description:
    "You got some books to exchange with other batch students? handOver welcomes you! Choose a resonable price and make it open for exchange, an indeed will figure you out.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="LCJ4aDPQxgYnKh5GwKapYOw9JsZJvw3aI5_8ZBnYqG4"
        />
      </head>
      <body className={inter.className}>
        <NextAuthProvider>
          {children}
          <Toaster />
          <Analytics />
        </NextAuthProvider>
      </body>
    </html>
  );
}
