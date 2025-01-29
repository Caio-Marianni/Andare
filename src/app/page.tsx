'use client';
import AboutMe from './components/AboutMe';
import Form from './components/Form';
import Hero from './components/Hero';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Form />
      <AboutMe />
    </div>
  )
}