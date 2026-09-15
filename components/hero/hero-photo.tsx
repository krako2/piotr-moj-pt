import Image from "next/image";

export default function HeroPhoto() {
  const heroPhotoWidth: number = 2160;
  const heroPhotoHeight: number = 2880;
  return (
    <section className="p-5 bg-(--placeholder) w-full">
      <Image
        src="/hero-photo.jpg"
        alt="Piotrek smiling in his car wearing a black hoodie"
        width={heroPhotoWidth}
        height={heroPhotoHeight}
        loading="eager"
      />
    </section>
  );
}
