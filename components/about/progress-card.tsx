import Image from "next/image";

export default function ProgressCard({src, alt, width, height, caption}: {src: string, alt: string, width: number, height: number, caption: string}) {
  return (
    <div className="flex flex-col items-center w-full text-center">
      <Image src={src} alt={alt} width={width} height={height} />
      <p className="p-5">{caption}</p>
    </div>
  );
}
