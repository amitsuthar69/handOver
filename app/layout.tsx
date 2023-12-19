import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "./ui/Providers";

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
      <body className={inter.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
