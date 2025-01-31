'use client';
import AboutMe from './components/AboutMe';
import Form from './components/Form';
import Hero from './components/Hero';
import Section from './components/Section';
import { pacotesNacionais } from "@/core/constants/index";


export default function HomePage() {
  return (
    <div>
      <Hero />
      <Form />
      {/* <Section title="Passagens Aéreas" data={passagensAereas} /> */}
      {/* <Section title="Pacotes Internacionais" data={pacotesInternacionais} /> */}
      <Section title="Pacotes Nacionais" description='Vamos conhecer as maravilhas do nosso pais' data={pacotesNacionais} />
      {/* <Section title="Cruzeiros" data={cruzeiros} /> */}
      {/* <Section title="Grupo com Guia" data={grupoComGuia} /> */}
      <AboutMe />
    </div>
  )
}