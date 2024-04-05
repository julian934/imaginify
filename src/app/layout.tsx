import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const IBMPlex = IBM_Plex_Sans({ subsets: ["latin"],
weight:['400','500','600','700'],
variable:'--font-ibm-plex' });

{/* Metadata for choosing font from google & activating font with various supported weights. */}

export const metadata: Metadata = {
  title: "Julian's Imaginify App",
  description: "AI-powered image generator",
};

{/* Double-Check Layout Data */}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables:{colorPrimary:'#624cf5'}
    }} >
    <html lang="en">
      <body className={IBMPlex.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
