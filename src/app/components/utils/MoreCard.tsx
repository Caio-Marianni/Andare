import React from 'react';
import { FaPlus } from 'react-icons/fa';

interface MoreCardProps {
  message: string;
}

const MoreCard: React.FC<MoreCardProps> = ({ message }) => {
  const sendMessage = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      onClick={sendMessage} 
      className="flex flex-col items-center justify-center p-5 cursor-pointer w-42 h-42 text-center text-gray-400  hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-900 shadow-lg dark:shadow-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700"
    >
      <FaPlus size={48} />
      <p className="mt-2 text-lg">Ver mais</p>
    </div>
  );
};

export default MoreCard;
