import { className } from "@/utils/className";
import { interFont, playfairFont } from "@/utils/fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={className(
          "bg-blue-900 flex justify-center items-center h-screen w-screen",
          playfairFont.variable,
          interFont.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
