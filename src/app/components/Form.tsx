"use client";

import { useState, useEffect, useRef } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Baby, BedDouble, LucidePlaneTakeoff, LucideUser, MapPin, CalendarDays, X } from "lucide-react";
import { format } from "date-fns";

const Form: React.FC = () => {
  const [destination, setDestination] = useState("");
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [numRooms, setNumRooms] = useState(1);
  const [origin, setOrigin] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);

  // Estado do calendário
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // Referência para o calendário
  const calendarRef = useRef<HTMLDivElement>(null);

  // Fechar o calendário ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setShowCalendar(false);
      }
    };

    if (showCalendar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCalendar]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formatDate = (date: Date) => format(date, "dd/MM/yyyy");

    const message =
      `Olá, gostaria de saber mais sobre uma viagem para *${destination}*\n` +
      `🛏️ Quartos: *${numRooms}*\n` +
      `▫️ Adultos: *${numAdults}*\n` +
      `▫️ Crianças: *${numChildren}*\n` +
      `📆 Viagem de *${origin}* para *${destination}*\n` +
      `🚩 Ida: *${formatDate(dateRange[0].startDate)}*, Volta: *${formatDate(dateRange[0].endDate)}*`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=556296794984&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="relative h-auto sm:h-0 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="grid grid-cols-6 gap-2 container sm:mx-4 p-1 bg-secondary-500 rounded-lg shadow-xl z-10">
        {/* Origem */}
        <label className="flex gap-1 items-center bg-white p-2 rounded-md col-span-3">
          <LucidePlaneTakeoff size={24} color="black" />
          <input
            placeholder="De onde?"
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="p-1 rounded-md border-none outline-none text-gray-600 placeholder-gray-300 w-full"
          />
        </label>
        
        {/* Destino */}
        <label className="flex gap-1 items-center bg-white p-2 rounded-md col-span-3">
          <MapPin size={24} color="black" />
          <input
            placeholder="Para onde?"
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="p-2 rounded-md border-none outline-none text-gray-600 placeholder-gray-300 w-full"
          />
        </label>
        
        {/* Adultos */}
        <label className="flex gap-1 items-center bg-white p-2 rounded-md col-span-2 md:col-span-1">
          <LucideUser size={24} color="black" />
          <input type="number" value={numAdults} onChange={(e) => setNumAdults(Number(e.target.value))} min="1" className="w-full p-1 rounded-md border-none outline-none text-gray-600" />
        </label>

        {/* Crianças */}
        <label className="flex gap-1 items-center bg-white p-2 rounded-md col-span-2 md:col-span-1">
          <Baby size={24} color="black" />
          <input type="number" value={numChildren} onChange={(e) => setNumChildren(Number(e.target.value))} min="0" className="w-full p-1 rounded-md border-none outline-none text-gray-600" />
        </label>

        {/* Quartos */}
        <label className="flex gap-1 items-center bg-white p-2 rounded-md col-span-2 md:col-span-1">
          <BedDouble size={24} color="black" />
          <input type="number" value={numRooms} onChange={(e) => setNumRooms(Number(e.target.value))} min="1" className="w-full p-1 rounded-md border-none outline-none text-gray-600" />
        </label>

        {/* Seleção de Período - Calendário */}
        <div className="relative col-span-4 md:col-span-2">
          <button type="button" className="flex items-center bg-white p-4 rounded-md w-full text-gray-600" onClick={() => setShowCalendar(true)}>
            <CalendarDays size={24} color="black" />
            <span className="ml-2">
              {format(dateRange[0].startDate, "dd/MM/yyyy")} - {format(dateRange[0].endDate, "dd/MM/yyyy")}
            </span>
          </button>

          {/* Painel do Calendário */}
          {showCalendar && (
            <div ref={calendarRef} className="absolute top-full mt-4 z-50 bg-white shadow-lg rounded-lg p-2">
              {/* Botão de Fechar */}
              <div className="flex justify-end">
                <button className="p-1 text-gray-600 hover:text-red-500 transition" onClick={() => setShowCalendar(false)}>
                  <X size={20} />
                </button>
              </div>

              <DateRange
                editableDateInputs={false}
                onChange={(item) =>
                  setDateRange([
                    {
                      startDate: item.selection.startDate || new Date(),
                      endDate: item.selection.endDate || new Date(),
                      key: item.selection.key || "selection",
                    },
                  ])
                }
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
                months={1}
                direction="horizontal"
                showMonthAndYearPickers={true} // Permite trocar o mês e o ano
                className="border rounded-md"
              />
            </div>
          )}
        </div>

        {/* Botão Enviar */}
        <button type="submit" className="bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-md transition-all duration-300 col-span-2  md:col-span-1">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
