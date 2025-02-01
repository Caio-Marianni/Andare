import React from "react";
import { passagensAereas } from "@/core/constants/index";
import { LucidePlane } from "lucide-react";
import Image from "next/image";
import MoreCard from "./utils/MoreCard";

export default function PassagensAereas() {
  return (
    <section id="Passagens Aéreas">
      {/* Title */}
      <div className="bg-white dark:bg-gray-800 w-full py-5 shadow-lg">
        <h2 className="container text-2xl font-bold text-gray-800 dark:text-gray-200">Passagens Aéreas</h2>
        <p className="container text-gray-400 text-sm">Encontre as melhores passagens aéreas para seu destino dos sonhos!</p>
      </div>

      {/* Cards */}
      <div className="py-5 pb-14 bg-gray-300 dark:bg-gray-950 bg-opacity-50 dark:bg-opacity-80">
        <div className="container flex flex-row flex-wrap justify-around gap-6">
          {passagensAereas.map((travel, index) => (
            <div
              key={index}
              className="relative group w-[255px] md:w-[276px] bg-white dark:bg-gray-900 shadow-lg dark:shadow-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Card Thumb */}
              <div className="relative cursor-pointer overflow-hidden">
                <Image src={travel.image} alt={travel.title} width={320} height={200} className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105" />

                {/* Icon Overlay */}
                <div className="absolute flex items-center justify-center top-3 right-3 w-12 h-12 bg-blue-500 dark:bg-blue-600 shadow-md rounded-full border-2 border-white">
                  <LucidePlane size={24} className="text-white" />
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              {/* Card Content */}
              <div className="px-4 py-2">
                {/* Title */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{travel.location}</h3>
                </div>

                {/* Price Details */}
                <div className="border-t mt-3">
                  <button className="w-full text-sm text-white-500 mt-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 shadow-md">
                    ver orcarmentos
                  </button>
                </div>
              </div>
            </div>
          ))}
          <MoreCard message="Olá, gostaria de ver mais sobre Passagens Aéreas" />
        </div>
      </div>
    </section>
  );
}
