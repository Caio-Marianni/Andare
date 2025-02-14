import React from "react";
import { FaPlus } from "react-icons/fa";

interface MoreCardProps {
  message: string;
}

const MoreCard: React.FC<MoreCardProps> = ({ message }) => {
  const sendMessage = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=556296794984&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex items-center h-full">
      <div onClick={sendMessage} className="flex flex-col items-center justify-center p-4 cursor-pointer w-[160px] h-[140px] text-center text-gray-400  hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-900 shadow-lg dark:shadow-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
        <FaPlus size={48} />
        <p className="mt-2 text-lg">Ver mais</p>
      </div>
    </div>
  );
};

export default MoreCard;
