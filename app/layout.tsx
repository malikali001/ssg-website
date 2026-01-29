import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import UtilityBar from "@/components/navigation/UtilityBar";
import MainNav from "@/components/navigation/MainNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SSG UK Ltd | Elite Security & Facilities Management",
  description: "Precision protection and integrated intelligence. SSG UK Ltd provides elite, technology-driven security and facilities management across the UK.",
  keywords: ["Security Services UK", "Facilities Management London", "SIA Approved Contractor", "Manned Guarding", "Commercial Cleaning"],
  openGraph: {
    title: "SSG UK Ltd | Elite Security & Facilities Management",
    description: "Precision protection and integrated intelligence. Elite security and FM services across the UK.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UtilityBar />
        <MainNav />
        {children}
      </body>
    </html>
  );
}
