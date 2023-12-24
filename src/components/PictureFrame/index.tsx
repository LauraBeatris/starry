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

      {/* TODO - Use generated picture */}
      <Image
        className="z-10"
        src="https://images.unsplash.com/photo-1652420933133-0e0e4675523b?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Generated Picture Example"
        fill
      />
    </div>
  );
}
