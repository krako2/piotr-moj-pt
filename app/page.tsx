import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div>
          <h1 className="text-7xl text-green-400 font-semibold">Stop guessing in&nbsp;the&nbsp;gym</h1>
          <p className="my-10">Work one-on-one with Piotr Moj in the Aberdeen area</p>
          <button className="">Book your free consultation</button>
        </div>
        <div className="w-100 h-100"></div>
      </div>
    </>
  );
}
