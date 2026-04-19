import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Favicon from "@/components/Favicon";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZinnyStore - Premium Wigs & Hair Extensions",
  description: "Discover beautiful wigs, human hair, and premium hair extensions at ZinnyStore. Shop our collection of lace front wigs, full lace wigs, and more for the perfect look.",
  icons: {
    icon: '/product-images/product1/product1_image1.avif',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-pink-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
