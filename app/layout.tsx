import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Habu Portfolio",
  description: "Personal portfolio by Takeru Habu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
