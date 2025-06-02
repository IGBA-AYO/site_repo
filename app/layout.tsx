import type React from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ìgbà Àyó App™",
    template: "%s | Ìgbà Àyó",
  },
  description: "One App. Endless Adventures.™️",
  keywords: [
    "Ìgbà Àyó",
    "adventure",
    "fun app",
    "explore",
    "culture",
    "Nigeria",
  ],
  authors: [{ name: "Ìgbà Àyó Team", url: "https://example.com" }],
  creator: "Ìgbà Àyó",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "Ìgbà Àyó App™",
    description: "One App. Endless Adventures.™️",
    url: "https://your-domain.com",
    siteName: "Ìgbà Àyó",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ìgbà Àyó App",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ìgbà Àyó App™",
    description: "One App. Endless Adventures.™️",
    images: ["/og-image.jpg"],
    creator: "@yourTwitterHandle",
  },
  icons: {
    icon: "/logo1.png",
    apple: "/phone-one.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
