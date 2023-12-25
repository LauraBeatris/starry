import Image from 'next/image';

export function PictureFrame() {
  return (
    <div className="relative h-[350px] w-[300px] md:h-[400px] md:w-[400px] lg:w-[400px] lg:h-[400px]">
      <Image
        className="z-20"
        src="/portrait-frame.png"
        alt="Portrait Frame"
        fill
      />

      {/* TODO - Use latest generated picture */}
      <Image
        className="z-10"
        src="/frame-content.jpeg"
        alt="Generated Picture Example"
        fill
      />
    </div>
  );
}
