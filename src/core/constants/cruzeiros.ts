import { TravelPackage } from "../types";
import CostaDiadema from "@/assets/travel/Costa-Diadema.webp";
import CostaPacifica from "@/assets/travel/Costa-Pacifica.webp";
import CostaFavolosa from "@/assets/travel/Costa-Favolosa.webp";


const OceanTravel: TravelPackage[] = [
  {
    id: 1,
    image: CostaDiadema,
    title: "Costa Diadema",
    location: "8 regiões diferentes.",
    description: ["Santos, Salvador, Maceió, Ilha de Santiago, Santa Cruz de Tenerifem, Funchal, Cádis, Lisboa (Portugal)"],
    departureLocation: "Santos, São Paulo -> Lisboa, Portugal",
    days: 17,
    fullPrice: 7320,
    taxes: ["2040.00", "1380.00", "660.00"],
    parcelPrice: 608,
    parcelTimes: 12,
    type: "Econômica",
  },{
    id: 2,
    image: CostaPacifica,
    title: "Costa Pacifica",
    location: "10 regiões diferentes",
    description: ["Santos, Rio de Janeiro, Salvador, Maceió, Recife, Ilha de Santiago, Santa Cruz de Tenerifem, Lisboa, Cádis, Barcelona (Espanha)"],
    departureLocation: "Santos, São Paulo -> Barcelona, Espanha",
    days: 18,
    fullPrice: 7320,
    taxes: ["2100.00", "1440.00", "720.00"],
    parcelPrice: 612,
    parcelTimes: 12,
    type: "Econômica",
  },{
    id: 3,
    image: CostaFavolosa,
    title: "Costa Favolosa",
    location: "9 regiões diferentes",
    description: ["Rio de Janeiro, Recife, São Vicente, Las Palmas de Gran Canaria, Casablanca, Barcelona, Marselha, Savona (Italia)"],
    departureLocation: "Rio de Janeiro -> Savona, Itália",
    days: 17,
    fullPrice: 7320,
    taxes: ["2040.00", "1380.00", "680.00"],
    parcelPrice: 640,
    parcelTimes: 12,
    type: "Econômica",
  },
];

export default OceanTravel;