"use client";

import { Baby, Bed, BedDouble, CalendarCheck, CalendarOff, LucidePlaneTakeoff, LucideUser, MapPin } from "lucide-react";
import React, { useState } from "react";

const Form: React.FC = () => {
  const [destination, setDestination] = useState("");
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [numRooms, setNumRooms] = useState(1);
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [origin, setOrigin] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const message =
    `Olá, gostaria de saber mais sobre uma viagem para ${destination}\n` +
    `🛏️ Quantidade de quartos: ${numRooms}\n` +
    `▫️ Quantidade de adultos: ${numAdults}\n` +
    `▫️ Quantidade de crianças: ${numChildren}\n` +
    `📆 A viagem seria de ${origin} para ${destination},\n` +
    `🚩 com ida em ${departureDate} e volta em ${returnDate}.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=556296794984&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="relative h-2 items-center justify-center flex">
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-2 container p-2 bg-amber-400 rounded-lg z-10">
        <label className="flex gap-1 items-center bg-white p-2 rounded-md">
          <MapPin size={24} color="black" />
          <input
            placeholder="Para onde ?"
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="p-2 rounded-md border-none outline-none text-gray-600 placeholder-gray-300"
          />
        </label>
        <label className="flex gap-1 items-center bg-white p-2 rounded-md">
          <LucidePlaneTakeoff size={24} color="black" />
          <input
            placeholder="Local de partida"
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="p-2 rounded-md border-none outline-none text-gray-600 placeholder-gray-300"
          />
        </label>
        <label className="flex gap-1 items-center bg-white p-2 rounded-md w-24">
          <LucideUser size={24} color="black" />
          <input
            type="number"
            value={numAdults}
            onChange={(e) => setNumAdults(Number(e.target.value))}
            min="1"
            className="w-12 p-1 rounded-md border-none outline-none text-gray-600 placeholder-gray-300"
          />
        </label>
        <label className="flex gap-1 items-center bg-white p-2 rounded-md">
          <Baby size={24} color="black" />
          <input
            type="number"
            value={numChildren}
            onChange={(e) => setNumChildren(Number(e.target.value))}
            min="0"
            className="w-12 p-1 rounded-md border-none outline-none text-gray-600 placeholder-gray-300"
          />
        </label>
        <label className="flex gap-1 items-center bg-white p-2 rounded-md">
          <BedDouble size={24} color="black" />
          <input
            type="number"
            value={numRooms}
            onChange={(e) => setNumRooms(Number(e.target.value))}
            min="1"
            className="w-12 p-1 rounded-md border-none outline-none text-gray-600 placeholder-gray-300"
          />
        </label>
        <label className="flex gap-1 items-center bg-white p-2 rounded-md">
          <CalendarCheck size={24} color="black" />
          <input
            placeholder="pra onde vamos ?"
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className="p-1 rounded-md border-none outline-none text-gray-600 placeholder-gray-300"
          />
        </label>
        <label className="flex gap-1 items-center bg-white p-2 rounded-md">
          <CalendarOff size={24} color="black" />
          <input
            placeholder="pra onde vamos ?"
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="p-1 rounded-md border-none outline-none text-gray-600 placeholder-gray-300"
          />
        </label>

        <button type="submit" className="bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-md transition-all duration-300">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;

// <form onSubmit={handleSubmit}>
//   <label>
//     Destino:
//     <input
//       type="text"
//       value={destination}
//       onChange={(e) => setDestination(e.target.value)}
//     />
//   </label>
//   <button type="submit">Enviar</button>
// </form>
