import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emily H - Resume",
  description: "Professional resume and portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
