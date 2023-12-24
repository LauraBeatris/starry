import Image from 'next/image';

export function PictureFrame() {
  return (
    <div className="relative h-[350px] w-[300px] md:h-[400px] md:w-[400px] lg:w-[400px] lg:h-[400px]">
      <Image src="/portrait-frame.png" alt="me" fill />
    </div>
  );
}
