"use client";
import React from "react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TravelCard from "./utils/TravelCard";
import MoreCard from "./utils/MoreCard";
import { TravelPackage } from "@/core/types";

interface SectionProps {
  title: string;
  description: string;
  data: TravelPackage[];
}

const Section: React.FC<SectionProps> = ({ title, description, data }) => {

  const [perView, setPerView] = useState(3.5);

  useEffect(() => {
    const updatePerView = () => {
      if (window.innerWidth < 640) { // sm (Tailwind)
        setPerView(1.5);
      } else if (window.innerWidth < 1000) { // md
        setPerView(2.5);
      } else if (window.innerWidth < 1300) { // lg
        setPerView(3.5);
      } else {
        setPerView(4.5); // xl ou maior
      }
    };

    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, []);

  return (
    <section id={title}>
      {/* Título e Descrição */}
      <div className="bg-white dark:bg-gray-800 w-full py-5 shadow-lg">
        <h2 className="container text-2xl font-bold text-gray-800 dark:text-gray-200">
          {title}
        </h2>
        <p className="container text-gray-400 text-sm">{description}</p>
      </div>

      {/* Carrossel com Swiper */}
      <div className="pl-10 bg-gray-300 dark:bg-gray-950 bg-opacity-50 dark:bg-opacity-80">
        <Swiper
          freeMode={false}
          slidesPerView={perView}
          spaceBetween={20}
          grabCursor={true}
          className="container py-10"
        >
          {data.map((travel, index) => (
            <SwiperSlide key={index} className="w-[255px] md:w-[276px] py-10 pl-10">
              <TravelCard travel={travel} type="air" />
            </SwiperSlide>
          ))}
          <SwiperSlide className="w-[255px] md:w-[276px] py-10 pl-10 m-auto">
            <MoreCard message={`Olá, gostaria de mais informações sobre ${title}`} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Section;
