import React from "react";
import TravelCard from "./utils/TravelCard";
import { TravelPackage } from "@/core/types";

interface SectionProps {
  title: string;
  description: string;
  data: TravelPackage[];
}

const Section: React.FC<SectionProps> = ({ title, description, data }) => {
  return (
    <section id={`${title}`}>
      {/* Title */}
      <div className="bg-white w-full pt-32 pb-8 shadow-lg">
        <h2 className="container text-2xl font-bold text-gray-800">{title}</h2>
        <h2 className="container text-gray-400 text-sm">{description}</h2>
      </div>

      {/* Cards */}
      <div className="py-5 bg-gray-300 bg-opacity-50">
        <div className="container flex flex-row flex-wrap justify-around gap-6 ">
          {data.map((travel, index) => (
            <TravelCard key={index} travel={travel} type="air" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
