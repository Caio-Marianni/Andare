import { LucideX } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface ModalProps {
  travel: {
    title: string;
    location: string;
    image: StaticImageData;
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
    <div className="fixed inset-0 flex justify-center items-center z-50">
      {/* Background Overlay */}
      <div onClick={onClose} className="absolute bg-black bg-opacity-60 w-screen h-screen"></div>

      {/* Modal Content */}
      <div className="relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-md w-full z-60">
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" onClick={onClose}>
          <LucideX size={24} />
        </button>

        {/* Modal Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{travel.title}</h3>
        <p className="text-gray-500 mb-3">{travel.location}</p>

        {/* Modal Image */}
        <Image
          src={travel.image}
          alt={travel.title}
          width={320}
          height={200}
          className="rounded-lg mb-4 w-full object-cover"
        />

        {/* Description */}
        <div className="space-y-2">
          {travel.description?.map((desc, i) => (
            <p key={i} className="text-gray-600 dark:text-gray-300">{desc}</p>
          ))}
        </div>

        {/* Travel Details */}
        <ul className="mt-4 text-gray-500 space-y-2">
          <li><strong className="text-gray-900 dark:text-white">Dias:</strong> {travel.days}</li>
          <li><strong className="text-gray-900 dark:text-white">Cidade de partida:</strong> {travel.departureLocation}</li>
          <li><strong className="text-gray-900 dark:text-white">Preço Total:</strong> R$ {travel.fullPrice}</li>
          <li>
            <strong className="text-gray-900 dark:text-white">Parcelado:</strong> R$ {travel.parcelPrice} em {travel.parcelTimes}x
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
