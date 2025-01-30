"use client";

import { useEffect, useRef } from "react";
import NavElements from "./NavElements";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Fechar ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={mobileMenuRef}
      className={`${
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } xl:hidden block absolute top-18 left-0 w-full bg-light-500 dark:bg-dark-900 shadow-md transform transition-all duration-300 ease-in-out -z-40`}
    >
      <div className="flex flex-col gap-4 p-4">
        <NavElements />
      </div>
      <a
        href="https://wa.me/556296794984"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center px-4 py-2 bg-blue-600 text-neutral-50 shadow-md hover:bg-blue-800 transition"
      >
        Entre em Contato
      </a>
    </div>
  );
};

export default MobileMenu;
