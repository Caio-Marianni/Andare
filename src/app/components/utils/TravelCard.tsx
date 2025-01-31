import { useState } from "react";
import { LucideCalendarDays, LucideMapPin, LucidePlane, LucideShip } from "lucide-react";
import Modal from "./Modal";
import Image from "next/image";

interface Travel {
  title: string;
  location: string;
  image: string;
  departureLocation: string;
  days: number;
  fullPrice: number;
  parcelPrice: number;
  parcelTimes: number;
  description?: string[];
}

interface TravelCardProps {
  travel: Travel;
  type: "ocean" | "air";
}

const TravelCard: React.FC<TravelCardProps> = ({ travel, type }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Card Container */}
      <div className="relative group w-[255px] md:w-[276px] bg-white dark:bg-gray-900 shadow-lg dark:shadow-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        {/* Card Thumb */}
        <div className="relative cursor-pointer overflow-hidden" onClick={() => setShowModal(true)}>
          <Image src={travel.image} alt={travel.title} width={320} height={200} className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105" />

          {/* Icon Overlay */}
          <div className="absolute flex items-center justify-center top-3 right-3 w-12 h-12 bg-blue-500 dark:bg-blue-600 shadow-md rounded-full border-2 border-white">
            {type === "ocean" ? <LucideShip size={24} className="text-white" /> : <LucidePlane size={24} className="text-white" />}
          </div>

          {/* Overlay Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>

        {/* View More Button */}
        <button
          className="absolute text-center shadow-md right-0 -translate-y-4 bg-blue-500 text-white px-5 py-2 rounded-s-full text-sm font-semibold hover:bg-blue-600 transition"
          onClick={() => setShowModal(true)}
        >
          Ver +
        </button>

        {/* Card Content */}
        <div className="px-4 py-2">
          {/* Title */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{travel.title}</h3>
            <p className="flex items-center gap-1 text-gray-500 text-sm">
              <LucideMapPin size={16} /> {travel.location}
            </p>
          </div>

          {/* Travel Details */}
          <div className="text-gray-500 text-sm mt-4">
            <p className="flex items-center gap-1">
              <LucideCalendarDays size={16} />
              {travel.days} dias
            </p>
            <p className="flex items-center gap-1">
              {type === "ocean" ? <LucideShip size={16} /> : <LucidePlane size={16} />}
              {travel.departureLocation}
            </p>
          </div>

          {/* Price Details */}
          <div className="border-t mt-3">
            <p className="text-sm text-gray-500 mt-2">A partir de:</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              R$ {travel.fullPrice}
              <span className="text-xs text-gray-500"> em até {travel.parcelTimes}x</span>
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && <Modal travel={travel} onClose={() => setShowModal(false)} />}
    </>
  );
};

export default TravelCard;
