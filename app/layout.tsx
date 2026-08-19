import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Piotr Moj PT",
  description: "Personal training",
};

const lexend = Lexend({
  subsets: ['latin'],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
