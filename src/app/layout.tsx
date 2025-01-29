import React from "react";
import { Providers } from "./providers";
import "./globals.css";
import { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// SEO
export const metadata: Metadata = {
  title: "Dashboard",
  description: "A Dashboard System to view the inventory and administrate the shop",
};

// Page structure
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <Providers>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
