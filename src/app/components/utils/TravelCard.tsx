import { useState } from "react";
import { LucideCalendarDays, LucideMapPin, LucidePlane, LucidePlaneTakeoff, LucideShip, LucideShipWheel } from "lucide-react";
import Modal from "./Modal";

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
      <div className="w-60 lg:w-80 mt-2 hover:-translate-y-2 bg-white dark:bg-gray-800 hover:shadow-lg shadow-sm rounded-lg overflow-hidden border-2 border-slate-300 dark:border-slate-700 transition-all duration-500">
        {/* Card Thumb */}
        <div className="relative" onClick={() => setShowModal(true)}>
          <img src={travel.image} alt={travel.title} className="relative w-full h-48 object-cover" />

          {/* Icon */}
          <div className="absolute flex items-center justify-center top-3 right-3 w-10 h-10 bg-slate-800 shadow-md rounded-full border-2 border-slate-100">
            {type === "ocean" ? <LucideShip size={20} className="text-white" /> : <LucidePlane size={20} className="text-white" />}
          </div>

          {/* Shade */}
          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full h-16"></div>

          {/* Button */}
          <button
            className="absolute text-center shadow-md right-0 -translate-y-4 bg-blue-500 text-white px-4 py-1 rounded-s-full w-auto hover:bg-blue-600 transition"
            onClick={() => setShowModal(true)}
          >
            ver +
          </button>
        </div>

        {/* Card Content / Header */}
        <div className="flex flex-col justify-between items-start px-4 py-3 h-[240px]">
          {/* Title */}
          <div>
            <h3 className="text-lg font-semibold">{travel.title}</h3>
            <p className="flex items-center gap-1 text-gray-500 -translate-y-1">
              <LucideMapPin size={15} /> {travel.location}
            </p>
          </div>

          {/* Info */}
          <div>
            <p className="flex items-center gap-1 text-gray-500">
              {type === "ocean" ? <LucideShipWheel size={18} /> : <LucidePlaneTakeoff size={18} />}
              {travel.departureLocation}
            </p>
            <p className="flex items-center gap-1 text-gray-500">
              <LucideCalendarDays size={18} />
              {travel.days} dias
            </p>
          </div>

          {/* Price */}
          <div>
            <p className="text-sm text-gray-500 translate-y-1">Ida e volta por</p>
            <p className="text-xl font-extrabold">A partir de R$ {travel.fullPrice}</p>
            <p className="text-sm">em até x{travel.parcelTimes}</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && <Modal travel={travel} onClose={() => setShowModal(false)} />}
    </>
  );
};

export default TravelCard;

//How to use this component
// import { AirTravel } from "@/core/constants/index"; 
// import TravelCard from "./components/utils/TravelCard";

// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//   {AirTravel.map((travel, index) => (
//     <TravelCard key={index} travel={travel} type={"air"} />
//   ))}
// </div>;