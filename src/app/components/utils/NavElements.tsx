interface NavElementsProps {
  className?: string; // Permite passar classes extras para estilização
}

const NavElements: React.FC<NavElementsProps> = ({ className }) => {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Passagens Aéreas", href: "#passagens" },
    { label: "Pacotes Internacionais", href: "#internacionais" },
    { label: "Pacotes Nacionais", href: "#nacionais" },
    { label: "Cruzeiros", href: "#cruzeiros" },
    { label: "Grupo com Guia", href: "#grupo" },
    { label: "Sobre Nós", href: "/sobre" },
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