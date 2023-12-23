import { GithubIcon } from "@/components/Icons/GitHubIcon";
import { className } from "@/utils/className";
import { interFont, playfairFont } from "@/utils/fonts";
import { Metadata } from "next";
import "./globals.css";
import { GitHubHoverCard } from "@/components/GitHubHoverCard";

export const metadata: Metadata = {
  title: "Starry",
  description:
    "Generate pictures based on Van Gogh arts via AI model. Powered by Vercel and Replicate.",
  // TODO - Update URL with correct domain
  metadataBase: new URL("https://starry.vercel.app"),
};

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
        <GitHubHoverCard />

        <main className="flex min-h-screen w-full flex-col items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
