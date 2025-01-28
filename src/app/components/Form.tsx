"use client";

import { Baby, BedDouble, CalendarDays, LucidePlaneTakeoff, LucideUser, MapPin } from "lucide-react";
import React, { useState } from "react";

const Form: React.FC = () => {
  const [destination, setDestination] = useState("");
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [numRooms, setNumRooms] = useState(1);
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [origin, setOrigin] = useState("");

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const message =
    `Olá, gostaria de saber mais sobre uma viagem para *${destination}*\n` +
    `🛏️ Quantidade de quartos: *${numRooms}*\n` +
    `▫️ Quantidade de adultos: *${numAdults}*\n` +
    `▫️ Quantidade de crianças: *${numChildren}*\n` +
    `📆 A viagem seria de *${origin}* para *${destination}*,\n` +
    `🚩 com ida em *${formatDate(departureDate)}* e volta em *${formatDate(returnDate)}*.`;  
    const whatsappUrl = `https://api.whatsapp.com/send?phone=556296794984&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="relative h-auto sm:h-0 items-center justify-center flex">
      <form onSubmit={handleSubmit} className="grid grid-cols-6 md:grid-cols-6 grid-rows-3 md:grid-rows-2 gap-2 container sm:mx-4 p-2 bg-amber-400 rounded-none sm:rounded-lg z-10 shadow-xl">
        {/* 1 */}
        <label className="flex gap-1 items-center bg-white p-2 rounded-md col-span-3 overflow-hidden">
          <MapPin size={24} color="black" />
          <input
            placeholder="Para onde ?"
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="p-2 rounded-md border-none outline-none text-gray-600 placeholder-gray-300"
          />
        </label>
        {/* 2 */}
        <label className="flex gap-1 items-center bg-white p-2 rounded-md col-span-3 col-start-4 overflow-hidden">
          <LucidePlaneTakeoff size={24} color="black" />
          <input
            placeholder="De onde ?"
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="p-2 rounded-md border-none outline-none text-gray-600 placeholder-gray-300"
          />
        </label>
        {/* 3 */}
        <label className="flex gap-1 items-center bg-white p-2 rounded-md row-start-2 col-span-2 md:col-span-1">
          <LucideUser size={24} color="black" />
          <input
            type="number"
            value={numAdults}
            onChange={(e) => setNumAdults(Number(e.target.value))}
            min="1"
            className="w-[90%] p-1 rounded-md border-none outline-none text-gray-600 placeholder-gray-300"
          />
        </label>
        {/* 4 */}
        <label className="flex gap-1 items-center bg-white p-2 rounded-md row-start-2 col-span-2 md:col-span-1">
          <Baby size={24} color="black" />
          <input
            type="number"
            value={numChildren}
            onChange={(e) => setNumChildren(Number(e.target.value))}
            min="0"
            className="w-[90%] p-1 rounded-md border-none outline-none text-gray-600 placeholder-gray-300"
          />
        </label>
        {/* 5 */}
        <label className="flex gap-1 items-center bg-white p-2 rounded-md row-start-2 col-span-2 md:col-span-1">
          <BedDouble size={24} color="black" />
          <input
            type="number"
            value={numRooms}
            onChange={(e) => setNumRooms(Number(e.target.value))}
            min="1"
            className="w-[90%] p-1 rounded-md border-none outline-none text-gray-600 placeholder-gray-300"
          />
        </label>
        {/* 6 */}
        <label className="flex items-center bg-white p-2 rounded-md col-span-4 md:col-span-2 md:col-start-4 row-start-3 md:row-start-2 overflow-hidden">
          <CalendarDays size={24} color="black" />
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className="pl-2 rounded-md border-none outline-none text-gray-600 placeholder-gray-300"
          />
          {/* Hidden calendar icon */}
          <div className="relative">
            <hr className="absolute -left-8 border-gray-500 border-2  rounded-3xl bg-white tranla z-10" />
          </div>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="rounded-md border-none outline-none text-gray-600 placeholder-gray-300 -translate-x-5"
          />
          {/* Hidden calendar icon */}
          <div className="relative ">
            <hr className="absolute -left-8 border-none bg-white p-3 -translate-x-2 -translate-y-2 z-10" />
          </div>
        </label>

        <button type="submit" className="bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-md transition-all duration-300 col-span-2 col-start-5 row-start-3 md:row-start-2 md:col-start-6 md:col-span-1">
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
