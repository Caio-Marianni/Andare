import React from "react";
import { Providers } from "./providers";
import "./globals.css";
import { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// SEO
export const metadata: Metadata = {
  title: "Andare - Agência de Viagens | Pacotes e Destinos Incríveis",
  description: "Descubra pacotes de viagens exclusivos com a Andare! Ofertas especiais para destinos nacionais e internacionais. Reserve agora sua próxima aventura!",
  keywords: ["viagens", "pacotes de viagem", "turismo", "destinos", "Andare", "agência de viagens"],
  robots: "index, follow",
  authors: [{ name: "Andare Viagens", url: "https://andare.com.br" }],
  creator: "Andare Viagens",
  publisher: "Andare Viagens",
  alternates: {
    canonical: "https://andare.com.br",
  },
  openGraph: {
    title: "Andare - Agência de Viagens | Pacotes e Destinos Incríveis",
    description: "Explore o mundo com Andare! Descubra destinos incríveis e ofertas especiais em pacotes de viagens. Planeje sua viagem conosco!",
    url: "https://andare.com.br",
    siteName: "Andare",
    images: [
      {
        url: "https://andare.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Andare - Agência de Viagens",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andare - Agência de Viagens | Pacotes e Destinos Incríveis",
    description: "Pacotes de viagem incríveis com a Andare! Planeje suas férias agora.",
    images: ["https://andare.com.br/og-image.jpg"],
  },
};

// Page structure
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <head>
        {/* Adicionando favicon e outras meta tags manuais */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#004aad" />
      </head>
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
