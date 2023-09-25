import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-blue-900 flex justify-center items-center h-screen w-screen">
        {children}
      </body>
    </html>
  );
}
