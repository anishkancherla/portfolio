import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Anish Kancherla",
  description: "Personal Portfolio",
  icons: {
    icon: "/logos/icon22.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const fontClasses = `${GeistSans.variable} ${GeistMono.variable} ${GeistSans.className}`;
  
  return (
    <html
      lang="en"
      className={fontClasses}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
