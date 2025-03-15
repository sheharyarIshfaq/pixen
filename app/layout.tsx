import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pixen - AI Image Generation Platform",
  description:
    "Transform your text descriptions into stunning visual imagery using AI. Create beautiful images with just a few words.",
  keywords:
    "AI image generation, text to image, Pixen, AI art generator, Nebius AI, image creation",
  authors: [
    { name: "Sheharyar Ishfaq", url: "https://github.com/sheharyarIshfaq" },
  ],
  creator: "Sheharyar Ishfaq",
  publisher: "Sheharyar Ishfaq",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pixen.vercel.app",
    title: "Pixen - AI Image Generation Platform",
    description:
      "Transform your text descriptions into stunning visual imagery using AI",
    siteName: "Pixen",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Pixen - AI Image Generation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixen - AI Image Generation Platform",
    description:
      "Transform your text descriptions into stunning visual imagery using AI",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#a855f7" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>{children}</main>
        <Toaster richColors />
      </body>
    </html>
  );
}
