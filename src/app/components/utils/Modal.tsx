import { LucideX } from "lucide-react";

interface ModalProps {
  travel: {
    title: string;
    location: string;
    image: string;
    departureLocation: string;
    days: number;
    fullPrice: number;
    parcelPrice: number;
    parcelTimes: number;
    description?: string[];
  };
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ travel, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-40">
      {/* Background Black */}
      <div onClick={onClose} className="absolute bg-black bg-opacity-50 w-screen h-screen"></div>

      <div className="bg-white dark:bg-gray-800 dark:border-slate-700 border-2 p-6 rounded-lg shadow-lg max-w-md w-full relative transform transition-transform duration-1000 z-60">
        {/* Close Button */}
        <button className="absolute text-3xl top-4 right-4 text-gray-500 hover:text-gray-700" onClick={onClose}>
          <LucideX size={24} />
        </button>

        {/* Modal Content */}
        <h3 className="text-lg font-bold">{travel.title}</h3>
        <p className="mb-3 -translate-y-1">{travel.location}</p>
        <img src={travel.image} alt="Travel Image" className="rounded-lg mb-4 w-full max-h-60 object-cover" />

        {/* Description */}
        <div className="flex flex-col gap-2">
          {travel.description?.map((desc, i) => (
            <p key={i} className="text-gray-600">{desc || "Descrição não disponível."}</p>
          ))}
        </div>

        {/* Travel Details */}
        <ul className="mt-4 text-gray-500 space-y-2">
          <li><strong className="dark:text-gray-300 text-gray-800">Dias :</strong> {travel.days}</li>
          <li><strong className="dark:text-gray-300 text-gray-800">Cidade de partida :</strong> {travel.departureLocation}</li>
          <li><strong className="dark:text-gray-300 text-gray-800">Preço Total :</strong> R$ {travel.fullPrice}</li>
          <li>
            <strong className="dark:text-gray-300 text-gray-800">Preço Parcelado : </strong>
            <strong>R$ {travel.parcelPrice}</strong> em <strong>{travel.parcelTimes} vezes</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
