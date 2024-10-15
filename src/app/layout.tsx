import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const kanitRegular = localFont({
  src: "./fonts/Kanit-Bold.ttf",
  variable: "--font-kanit-regular",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hasib Shaif",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanitRegular} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
