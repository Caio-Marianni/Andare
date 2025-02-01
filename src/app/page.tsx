'use client';
import AboutMe from './components/AboutMe';
import Form from './components/Form';
import Hero from './components/Hero';
import PassagensAereas from './components/PassagensAereas';
import Section from './components/Section';
import { pacotesNacionais, cruzeiros } from "@/core/constants/index";


export default function HomePage() {
  return (
    <div>
      <Hero />
      <Form />
      {/* Random div */}
      <div className="bg-white dark:bg-gray-800 w-full pt-20"></div>
      <PassagensAereas />
      {/* <Section title="Pacotes Internacionais" data={pacotesInternacionais} /> */}
      <Section title="Pacotes Nacionais" description='Vamos conhecer as maravilhas do nosso pais' data={pacotesNacionais} />
      <Section title="Cruzeiros" description='Que tal navegar um pouco, basta escolher o navio' data={cruzeiros} />
      {/* <Section title="Grupo com Guia" data={grupoComGuia} /> */}
      <AboutMe />
    </div>
  )
}