import { LucideCar, LucideGlobe, LucideHotel, LucidePlane, LucideShip, LucideTheater } from "lucide-react";
import React from "react";

const services = [
  { icon: <LucidePlane size={24} />, text: "Passagens Aéreas" },
  { icon: <LucideShip size={24} />, text: "Cruzeiros" },
  { icon: <LucideCar size={24} />, text: "Locação de Veículos" },
  { icon: <LucideHotel size={24} />, text: "Reserva de Hotéis" },
  { icon: <LucideGlobe size={24} />, text: "Pacotes de Lazer" },
  { icon: <LucideTheater size={24} />, text: "Tickets para Shows e Eventos" },
];

export default function AboutMe() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16 pt-28 transition-all duration-500">
      <div className="container">
        {/* Header */}
        <div className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 max-w-5xl">
          Quem Somos
          <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
            A Andare Viagens e Turismo surgiu no mercado a partir da paixão por viajar e explorar o mundo, oferecendo não apenas serviços de qualidade, mas experiências memoráveis.
          </p>
        </div>

        {/* Services */}
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100" >Nossos Serviços</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-500 dark:text-gray-400">
          {services.map((service, index) => (
            <div key={index}>
              <div className="p-4 bg-white dark:bg-dark-800 hover:-translate-y-1 transition-all duration-300 shadow-lg rounded-xl flex items-center gap-4">
                {service.icon}
                <span className="text-lg font-medium">{service.text}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="mt-12 max-w-4xl">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Nossa Missão</h3>
          <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-400">
            Levar nossos clientes para os melhores destinos do Brasil e do mundo, proporcionando um serviço personalizado, ágil e de qualidade. Queremos superar expectativas e garantir tranquilidade e
            o melhor custo-benefício para cada viagem.
          </p>
        </div>
      </div>
    </section>
  );
}
