import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { getCurrentFavicon } from "@/lib/favicon-config";

const kanitRegular = localFont({
  src: "./fonts/Kanit-Bold.ttf",
  variable: "--font-kanit-regular",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hasib Shaif", // Ensure title is always a string
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={getCurrentFavicon()} type="image/x-icon" />
        <title>{String(metadata.title ?? "Default Title")}</title>
      </head>
      <body className={`${kanitRegular} antialiased`}>
        {children}
      </body>
    </html>
  );
}
