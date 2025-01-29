import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 flex justify-between flex-wrap">
        {/* Contato */}
        <div className="">
          <h2 className="text-lg font-semibold py-1">Entre em contato conosco</h2>
          <div className="text-gray-400 text-sm">
            <p>Estamos prontos a lhe atender!</p>
            <p className="flex items-center">
              <FaWhatsapp className="mr-2 text-green-500" /> (62) 99679-4984
            </p>
            <p>andareviagenseturismo@gmail.com</p>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="mt-6 md:mt-0 md:text-center">
          <h2 className="text-lg font-semibold">Redes Sociais</h2>
          <div className="flex mt-2 space-x-4 justify-end md:justify-center">
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              <FaFacebook />
            </a>
            <a href="https://wa.me/5562996794984" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Endereço */}
        <div className="mt-6 md:mt-0 md:text-right w-full md:w-auto">
          <h2 className="text-lg font-semibold">Endereço</h2>
          <div className="text-gray-400 text-sm">
            <p className="mt-2">Rua P, Quadra 20, Lote 33,</p>
            <p>Setor Progresso – Goiânia – GO</p>
            <p>CEP: 74.580-660</p>
            <p>CNPJ: 47.334.833/0001-52</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
