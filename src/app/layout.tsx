import React from 'react';
import { Providers } from './providers';
import "./globals.css";
import { Metadata } from 'next';

// SEO
export const metadata: Metadata = {
  title: "Dashboard",
  description: "A Dashboard System to view the inventory and administrate the shop",
};

// Page structure                                                           
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className='bg-secondary-100 dark:bg-secondary-50 transition-all'>
        <nav>teste aqui</nav>
        <Providers>{children}</Providers>
        <footer></footer>
      </body>
    </html>
  );
}
