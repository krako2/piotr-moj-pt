import type { Metadata } from "next";
import { Montserrat, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Piotrek Moj - PT",
  description: "Personal training",
};

const montserrat = Montserrat({
  subsets: ['latin'],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={cn("font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}
