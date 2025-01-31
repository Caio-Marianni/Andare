import { TravelPackage } from "../types";
import NordOne from "@/assets/travel/Nord-One.webp";
import IconHotel from "@/assets/travel/Icon Hotel.webp";
import Place2YouHotel from "@/assets/travel/Place2You-Hotel.webp";
import MiniHotelDunas from "@/assets/travel/Mini-Hotel-Dunas.webp";
import VilaJeriHotel from "@/assets/travel/Vila-Jeri-Hotel.webp";
import EssenzaDuneHotel from "@/assets/travel/Essenza-Dune-Hotel.webp";
import NauticomarResort from "@/assets/travel/Nauticomar-Resort.webp";
import PortoCalemPraiaHotel from "@/assets/travel/Porto-Cálem-Praia-Hotel.webp";
import NobileSuites from "@/assets/travel/Nobile-Suites.webp";
import ComfortSuites from "@/assets/travel/Comfort-Suites.webp";
import PousadaMarAtlantico from "@/assets/travel/Pousada-Mar-Atlântico.webp";
import DolphinVillaHotel from "@/assets/travel/Dolphin-Villa-Hotel.webp";



const pacotesNacionais: TravelPackage[] = [
  {
    id: 1,
    image: NordOne,
    title: "Nord One",
    location: "João Pessoa, PB",
    departureLocation: "Goiânia, GO",
    days: 7,
    taxes: ["149"],
    fullPrice: 2416,
    parcelPrice: 161,
    parcelTimes: 15,
    description: ["🚌 Transfers", "☕ Café da Manhã", "🗺️ City Tour", "✈️ Passagem Aérea Inclusa", "🛡️ Cobertura até R$ 4 mil"],
  },
  {
    id: 2,
    image: IconHotel,
    title: "Icon Hotel",
    location: "João Pessoa, PB",
    departureLocation: "Goiânia, GO",
    days: 7,
    taxes: ["246"],
    fullPrice: 3.735,
    parcelPrice: 249,
    parcelTimes: 15,
    description: ["🚌 Transfers", "☕ Café da Manhã", "🗺️ City Tour", "✈️ Passagem Aérea Inclusa", "🛡️ Cobertura até R$ 4 mil"],
  },
  {
    id: 3,
    image: Place2YouHotel,
    title: "Place2You Hotel",
    location: "João Pessoa, PB",
    departureLocation: "Goiânia, GO",
    days: 7,
    taxes: ["205"],
    fullPrice: 2.655,
    parcelPrice: 177,
    parcelTimes: 15,
    description: ["🚌 Transfers", "☕ Café da Manhã", "🗺️ City Tour", "✈️ Passagem Aérea Inclusa", "🛡️ Cobertura até R$ 4 mil"],
  },
  {
    id: 4,
    image: MiniHotelDunas, 
    title: "Mini Hotel Dunas",
    location: "Jericoacoara, CE",
    departureLocation: "Goiânia, GO",
    days: 6,
    taxes: ["149"],
    fullPrice: 2385,
    parcelPrice: 159,
    parcelTimes: 15,
    description: ["☕ Café da Manhã", "✈️ Passagem Aérea GOL", "🚌 Transfers", "🌅 Passeios ao Litoral Leste e Oeste de Jericoacoara", "🛡️ Cobertura até R$ 4.000 para cancelamento involuntário"],
  },
  {
    id: 5,
    image: VilaJeriHotel, 
    title: "Vila Jeri Hotel",
    location: "Jericoacoara, CE",
    departureLocation: "Goiânia, GO",
    days: 6,
    taxes: ["149"],
    fullPrice: 2520,
    parcelPrice: 168,
    parcelTimes: 15,
    description: ["☕ Café da Manhã", "✈️ Passagem Aérea GOL", "🚌 Transfers", "🌅 Passeios ao Litoral Leste e Oeste de Jericoacoara", "🛡️ Cobertura até R$ 4.000 para cancelamento involuntário"],
  },
  {
    id: 6,
    image: EssenzaDuneHotel, 
    title: "Essenza Dune Hotel",
    location: "Jericoacoara, CE",
    departureLocation: "Goiânia, GO",
    days: 6,
    taxes: ["149"],
    fullPrice: 4860,
    parcelPrice: 324,
    parcelTimes: 15,
    description: ["☕ Café da Manhã", "✈️ Passagem Aérea GOL", "🚌 Transfers", "🌅 Passeios ao Litoral Leste e Oeste de Jericoacoara", "🛡️ Cobertura até R$ 4.000 para cancelamento involuntário"],
  },
  {
    id: 7,
    image: NauticomarResort, 
    title: "Nauticomar Resort",
    location: "Porto Seguro, BA",
    departureLocation: "Goinia, GO",
    days: 5,
    taxes: ["149"],
    fullPrice: 3870,
    parcelPrice: 258,
    parcelTimes: 15,
    description: ["☕ Café da Manhã", "✈️ Passagem Aérea GOL", "🚌 Transfers", "🏖️ Beach Club", "🎢 Parque Náutico", "👶 2 Crianças Grátis até 12 anos", "🛡️ Cobertura até R$ 4.000"],
  },
  {
    id: 8,
    image: PortoCalemPraiaHotel, 
    title: "Porto Cálem Praia Hotel",
    location: "Porto Seguro, BA",
    departureLocation: "Goiania, GO",
    days: 5,
    taxes: ["149"],
    fullPrice: 1875,
    parcelPrice: 125,
    parcelTimes: 15,
    description: ["☕ Café da Manhã", "✈️ Passagem Aérea GOL", "🚌 Transfers", "🏖️ Beach Club", "🎢 Parque Náutico", "👶 2 Crianças Grátis até 12 anos", "🛡️ Cobertura até R$ 4.000"],
  },
  {
    id: 9,
    image: NobileSuites, 
    title: "Nobile Suites",
    location: "Vitória, ES",
    departureLocation: "Goiânia, GO",
    days: 5,
    taxes: ["135"],
    fullPrice: 1875,
    parcelPrice: 125,
    parcelTimes: 15,
    description: ["☕ Café da Manhã", "✈️ Passagem Aérea LATAM", "🚌 Transfers", "🏖️ Passeios: Praia de Guarapari", "⛰️ Montanhas Capixabas"],
  },
  {
    id: 10,
    image: ComfortSuites, 
    title: "Comfort Suites",
    location: "Vitória, ES",
    departureLocation: "Goiânia, GO",
    days: 5,
    taxes: ["103"],
    fullPrice: 2145,
    parcelPrice: 143,
    parcelTimes: 15,
    description: ["☕ Café da Manhã", "✈️ Passagem Aérea LATAM", "🚌 Transfers", "🏖️ Passeios: Praia de Guarapari", "⛰️ Montanhas Capixabas"],
  },
  {
    id: 11,
    image: PousadaMarAtlantico, 
    title: "Pousada Mar Atlântico",
    location: "Recife, PE",
    departureLocation: "Recife, PE",
    days: 4,
    taxes: ["149"],
    fullPrice: 2400,
    parcelPrice: 160,
    parcelTimes: 15,
    description: [
      "☕ Café da Manhã",
      "✈️ Passagem Aérea Azul",
      "🚌 Transfers",
      "🏖️ Caminhada Histórica",
      "🛡️ Cobertura até R$ 4.000",
    ],
  },
  {
    id: 12,
    image: DolphinVillaHotel, 
    title: "Dolphin Villa Hotel",
    location: "Fernando de Noronha, PE",
    departureLocation: "Recife, PE",
    days: 4,
    taxes: ["149"],
    fullPrice: 2985,
    parcelPrice: 199,
    parcelTimes: 15,
    description: [
      "☕ Café da Manhã",
      "✈️ Passagem Aérea Azul",
      "🚌 Transfers",
      "🏖️ Caminhada Histórica",
      "🛡️ Cobertura até R$ 4.000",
    ],
  },
];

export default pacotesNacionais;
