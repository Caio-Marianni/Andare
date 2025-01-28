import NavElements from "./NavElements";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void; // Função para fechar o menu
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } xl:hidden block absolute top-16 left-0 w-full bg-accent-400 shadow-md transform transition-all duration-300 ease-in-out -z-10`}
    >
      <div className="flex flex-col gap-4 p-4">
        <NavElements />
      </div>
      <a
        href="https://wa.me/556296794984"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center px-4 py-2 bg-primary-500 text-neutral-50 shadow-md hover:bg-primary-700 transition"
      >
        Entre em Contato
      </a>
    </div>
  );
};

export default MobileMenu;
