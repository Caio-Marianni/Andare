import { TravelPackage } from "../types";

const AirTravel: TravelPackage[] = [
  {
    id: 1,
    image: "https://www.costadosauipe.com.br/images/news/0473/elevador-lacerda-salavdor.jpg",
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
    image: "https://magazine.zarpo.com.br/wp-content/uploads/2023/05/14_Fachada_Casa-di-Vina-Boutique.jpg",
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
    image: "https://www.hotelcaicara.com/imagens/galerias/bw-hotel-caicara-fachada.jpg",
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
    image: "https://nord-easy-connect-joao-pessoa.booked.com.pt/data/Photos/450x450/14814/1481494/1481494553/Nord-Easy-Connect-Hotel-Joao-Pessoa-Exterior.JPEG",
    title: "Nord One",
    location: "João Pessoa, Paraíba",
    departureLocation: "Goiania, GO",
    days: 7,
    taxes: ["149"],
    fullPrice: 2.282,
    parcelPrice: 163,
    parcelTimes: 14,
    description: ["☕ Café da Manhã", "🚌 Transfers", "🌴 Passeio Praias da Costa do Conde", "🌅 Entardecer com Bolero de Ravel", "& Muito Mais"],
    
  },
  {
    id: 5,
    image: "https://www.ushuaia.com.br/wp-content/uploads/sites/5/2022/11/unnamed-1.jpg",
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