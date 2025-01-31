import { TravelPackage } from "../types";
import HitHotel from "@/assets/travel/Hit-Hotel.webp";
import CasaDiVinaboutique from "@/assets/travel/Casa-di-Vina-Boutique.webp";
import HotelCaicara from "@/assets/travel/Hotel-Caicara.webp";
import ElCalafate from "@/assets/travel/El-Calafate.webp";


const AirTravel: TravelPackage[] = [
  {
    id: 1,
    image: HitHotel,
    title: "Hit Hotel",
    location: "Salvador, Bahia",
    departureLocation: "Brasília, DF",
    days: 5,
    taxes: ["149"],
    fullPrice: 2.002,
    parcelPrice: 143,
    parcelTimes: 14,
    description: ["☕ Café da Manhã", "🚌 Transfers", "🌴 Passeio Praias da Costa do Conde", "🌅 Entardecer com Bolero de Ravel", "& Muito Mais"],
  },
  {
    id: 2,
    image: CasaDiVinaboutique,
    title: "Casa Di Vina Boutique Hotel",
    location: "Salvador, Bahia",
    departureLocation: "Brasília, DF",
    days: 5,
    taxes: ["149"],
    fullPrice: 2.436,
    parcelPrice: 174,
    parcelTimes: 14,
    description: ["☕ Café da Manhã", "🚌 Transfers", "🌴 Passeio Praias da Costa do Conde", "🌅 Entardecer com Bolero de Ravel", "& Muito Mais"],

  },
  {
    id: 3,
    image: HotelCaicara,
    title: "Hotel Caiçara",
    location: "João Pessoa, Paraíba",
    departureLocation: "Goiania, GO",
    days: 7,
    taxes: ["149"],
    fullPrice: 2.668,
    parcelPrice: 192,
    parcelTimes: 14,
    description: ["☕ Café da Manhã", "🚌 Transfers", "🌴 Passeio Praias da Costa do Conde", "🌅 Entardecer com Bolero de Ravel", "& Muito Mais"],

  },
  {
    id: 4,
    image: ElCalafate,
    title: "El Calafate e Ushuaia", 
    location: "Buenos Aires, Argentina",
    departureLocation: "São Paulo, SP",
    days: 7,
    taxes: ["149"],
    fullPrice: 6.636,
    parcelPrice: 474,
    parcelTimes: 14,
    description: ["☕ Café da Manhã", "🚌 Transfers", "🌴 Passeio Praias da Costa do Conde", "🌅 Entardecer com Bolero de Ravel", "& Muito Mais"],

  }
];

export default AirTravel;