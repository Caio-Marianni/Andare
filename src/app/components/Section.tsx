import React from "react";
import TravelCard from "./utils/TravelCard";
import { TravelPackage } from "@/core/types";
import MoreCard from "./utils/MoreCard";

interface SectionProps {
  title: string;
  description: string;
  data: TravelPackage[];
}

const Section: React.FC<SectionProps> = ({ title, description, data }) => {
  return (
    <section id={`${title}`}>
      {/* Title */}
      <div className="bg-white dark:bg-gray-800 w-full py-5 shadow-lg">
        <h2 className="container text-2xl font-bold text-gray-800 dark:text-gray-200">{title}</h2>
        <p className="container text-gray-400 text-sm">{description}</p>
      </div>

      {/* Cards */}
      <div className="py-5 pb-14 bg-gray-300 dark:bg-gray-950 bg-opacity-50 dark:bg-opacity-80">
        <div className="container flex flex-row flex-wrap justify-around gap-6 ">
          {data.map((travel, index) => (
            <TravelCard key={index} travel={travel} type="air" />
          ))}
          <MoreCard message={`Olá, gostaria de mais informações sobre ${title}`} />
        </div>
      </div>
    </section>
  );
};

export default Section;
