import Image from 'next/image';

export function PaintingUploader() {
  return (
    <div className="relative mt-6 h-[600px] w-[450px]">
      <Image
        className="z-20"
        src="/painting-frame.png"
        alt="Portrait Frame"
        fill
      />

      <Image
        className="z-10 blur-sm"
        src="/starry-night.webp"
        alt="Generated Picture Example"
        fill
      />
    </div>
  );
}
