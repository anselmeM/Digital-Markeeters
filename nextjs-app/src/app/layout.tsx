import type { Metadata } from "next";
import { Inter, Bodoni_Moda, Instrument_Serif } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";
import CustomCursor from "@/components/CustomCursor";
import GrainOverlay from "@/components/GrainOverlay";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marcy Studios - Digital Experience Agency",
  description: "Marcy Studios is a digital experience agency crafting immersive digital experiences for brands that dare to be different. We blend strategy with avant-garde design.",
  openGraph: {
    title: "Marcy Studios - Digital Experience Agency",
    description: "We craft immersive digital experiences for brands that dare to be different. Merging strategy with avant-garde design.",
    url: "https://marcy.com/",
    siteName: "Marcy Studios",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcy Studios - Digital Experience Agency",
    description: "We craft immersive digital experiences for brands that dare to be different.",
  },
  icons: {
    icon: "/favicon.ico",
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
    <html lang="en" className={`${inter.variable} ${bodoni.variable} ${instrument.variable}`}>
      <body className="bg-[#F2EFE9] text-[#2A2622] font-sans antialiased selection:bg-[#B35A46] selection:text-white overflow-x-hidden">
        <CustomCursor />
        <GrainOverlay />
        
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          data-cursor="pointer"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#B35A46] focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to main content
        </a>
        
        <SmoothScroll>
          <Navigation />
          
          <main id="main-content">
            <Suspense fallback={<div className="min-h-screen bg-[#F2EFE9]" />}>
              <PageTransition>
                {children}
              </PageTransition>
            </Suspense>
          </main>
          
          <Footer />
          <BackToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
