"use client"

export default function Footer() {
  return (
    <footer className="m-5 flex justify-center items-center h-30 bg-(--placeholder)">
      <p>&copy; { new Date().getFullYear() } Piotrek Moj. All rights reserved.</p>
    </footer>
  );
}
