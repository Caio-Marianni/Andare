"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavElements from "./utils/NavElements";
import MobileMenu from "./utils/MobileMenu";
import Image from "next/image"; // Importação do componente Image
import ThemeToggle from "./utils/ThemeSwitcher";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative bg-accent-200 shadow-md z-40">
      <div className="container w-full flex items-center justify-between p-4 bg-accent-200 shadow-md xl:shadow-none z-20">
        {/* Logo */}
        <Link href="/">
          <Image
            className="flex items-center gap-2 px-4 py-1 bg-white bg-opacity-20 hover:bg-opacity-10 transition-all duration-200 rounded-full"
            src="/logo2.png"
            alt="Logo"
            width={150}
            height={32}
            priority
          />
        </Link>

        {/* Menu for larger screens */}
        <NavElements className="hidden xl:flex text-sm" />

        <div className="flex gap-4">
          {/* Contact Button */}
          <ThemeToggle />
          <a
            href="https://wa.me/556296794984"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block px-4 py-2 bg-primary-500 text-neutral-50 rounded-lg shadow-md hover:bg-primary-600 transition"
          >
            Entre em Contato
          </a>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="block xl:hidden text-neutral-200">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="z-10">
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </nav>
  );
};

export default Navbar;
