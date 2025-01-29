import React from "react";

const Hero = () => {
  return (
    <div className="relative top-8 sm:top-0 w-full h-[600px] bg-cover" style={{ backgroundImage: "url('./backgrounds/background1.webp')" }}>
      {/* Shadow */}
      <div className="absolute w-full h-full bg-gradient-to-r from-slate-900 to-[#ffffff00]"></div>
      {/* Text */}
      <div className="relative container flex flex-col justify-center w-full h-full z-10 px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Viaje sem dores de cabeça para
          <br />
          <span className="text-secondary-500">onde</span> e{" "}
          <span className="text-secondary-500">quando</span> quiser.
        </h1>
        <p className="text-gray-400 text-sm md:text-base my-m mt-s">
          Planejaremos sua próxima viagem de forma simples e eficiente.
          <br />
          Descubra destinos incríveis e viaje com tranquilidade,
          <br />
          no seu tempo e do seu jeito.
        </p>
        <a
          href="https://wa.me/556296794984"
          className="w-36 text-center py-2 px-6 bg-blue-600 shadow-blue-900 rounded-lg shadow-md hover:bg-blue-800 hover:-translate-y-1 transition duration-300 ease-in-out text-white"
        >
          Viage agora
        </a>
      </div>
    </div>
  );
};

export default Hero;
