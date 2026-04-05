import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;500;600;700&family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="bg-[#F2EFE9] text-[#2A2622] font-sans antialiased selection:bg-[#B35A46] selection:text-white overflow-x-hidden">
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#B35A46] focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to main content
        </a>
        
        <Navigation />
        
        <main id="main-content">
          {children}
        </main>
        
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
