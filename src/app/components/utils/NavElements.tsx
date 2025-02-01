interface NavElementsProps {
  className?: string; // Permite passar classes extras para estilização
}

const NavElements: React.FC<NavElementsProps> = ({ className }) => {
  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Passagens Aéreas", href: "#Passagens Aéreas" },
    { label: "Pacotes Internacionais", href: "#Pacotes Internacionais" },
    { label: "Pacotes Nacionais", href: "#Pacotes Nacionais" },
    { label: "Cruzeiros", href: "#Cruzeiros" },
    { label: "Grupo com Guia", href: "#Grupo com Guia" },
    { label: "Sobre Nós", href: "#about" },
  ];

  return (
    <ul className={`flex flex-col xl:flex-row gap-6 ${className}`}>
      {menuItems.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            className="text-neutral-400 hover:text-neutral-950 dark:text-neutral-400 hover:dark:text-neutral-100 transition-colors font-medium"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavElements;