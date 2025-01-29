import { TravelPackage } from "../types";

const OceanTravel: TravelPackage[] = [
  {
    id: 1,
    image: "https://d3uaz35ue406d5.cloudfront.net/assets/images/compagnies/costa-croisieres/costa-diadema/activites/large/costa-diadema-0yqw25skdecba8vedxn3gh3hx8.webp",
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
    image: "https://brasilturis.com.br/storage/2024/07/Piscina-Costa-Diadema-1000x640.jpg",
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
    image: "https://d3uaz35ue406d5.cloudfront.net/assets/images/compagnies/costa-croisieres/costa-favolosa/activites/large/costa-favolosa-0yqw25xxkqc4ybja5xn3gh3hx8.webp",
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