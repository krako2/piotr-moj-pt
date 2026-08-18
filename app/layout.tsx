import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Piotr Moj PT",
  description: "Personal training",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
