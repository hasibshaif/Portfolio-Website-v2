import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { getCurrentFavicon } from "@/lib/favicon-config";

const kanitRegular = localFont({
  src: "./fonts/Kanit-Bold.ttf",
  variable: "--font-kanit-regular",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hasib Shaif",
  description: "Computer Science student and software engineer passionate about full-stack development, data science, and emerging technologies.",
  keywords: ["software engineer", "full-stack developer", "data science", "computer science", "portfolio"],
  authors: [{ name: "Hasib Shaif" }],
  creator: "Hasib Shaif",
  openGraph: {
    title: "Hasib Shaif",
    description: "Computer Science student and software engineer passionate about full-stack development, data science, and emerging technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasib Shaif",
    description: "Computer Science student and software engineer passionate about full-stack development, data science, and emerging technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon1.ico', sizes: 'any' },
      { url: '/favicon/favicon2.ico', sizes: 'any' },
      { url: '/favicon/favicon3.ico', sizes: 'any' },
      { url: '/favicon/favicon4.ico', sizes: 'any' },
      { url: '/favicon/favicon5.ico', sizes: 'any' },
      { url: '/favicon/favicon6.ico', sizes: 'any' },
    ],
    shortcut: '/favicon/favicon5.ico',
    apple: '/favicon/favicon5.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href={getCurrentFavicon()} type="image/x-icon" />
      </head>
      <body className={`${kanitRegular.variable} antialiased`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZJ8ZLNZ1V8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZJ8ZLNZ1V8');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
