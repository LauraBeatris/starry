import { CSSProperties } from "react";

function ContentBox() {
  return (
    <div
      style={
        {
          "--background": "23 37 84",
          "--highlight": "255 255 255",

          "--bg-color":
            "linear-gradient(rgb(var(--background)), rgb(var(--background)))",
          "--border-color": `linear-gradient(145deg,
            rgb(var(--highlight)) 0%,
            rgb(var(--highlight) / 0.3) 33.33%,
            rgb(var(--highlight) / 0.14) 66.67%,
            rgb(var(--highlight) / 0.1) 100%)
          `,
        } as CSSProperties
      }
      className="flex aspect-[2/1] w-full max-w-md flex-col items-center justify-center rounded-xl border border-transparent p-8 text-center
      [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
    >
      <p className="text-xl font-medium text-white">Hello, gradient</p>
    </div>
  );
}

export default function Home() {
  return <ContentBox />;
}
