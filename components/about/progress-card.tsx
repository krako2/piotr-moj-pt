import Image from "next/image";
import { useContext } from "react";
import { BeforeAfterLoadContext, BeforeAfterReadyState } from "@/components/about/before-after";

export default function ProgressCard({src, alt, width, height}: {src: string, alt: string, width: number, height: number}) {
  let { ready, setReady } = useContext<BeforeAfterReadyState>(BeforeAfterLoadContext);

  return (
    <div className="flex flex-col items-center w-full text-center">
      <Image src={src} alt={alt} width={width} height={height} onLoad={() => setReady((prevReady) => prevReady + 1)}/>
    </div>
  );
}
