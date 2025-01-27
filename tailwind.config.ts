import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f8f2e1", // Muito claro
          100: "#f0e4bc", // Claro
          200: "#e2d7b7", // Versão mais clara
          300: "#d3c78f", // Mais suave
          400: "#caaa81", // Bege principal
          500: "#b18c6b", // Levemente mais escuro
          600: "#a48d68", // Versão mais escura
          700: "#8e7a56", // Escuro
          800: "#7a6644", // Muito escuro
          900: "#65533a", // Preto amarelado
        },
        secondary: {
          50: "#e1f4fe", // Muito claro
          100: "#bfe6fd", // Claro
          200: "#85cefd", // Azul claro
          300: "#69c0fd", // Mais suave
          400: "#53b5fc", // Azul vibrante
          500: "#3a97e5", // Levemente mais escuro
          600: "#3695d3", // Azul mais escuro
          700: "#2a75b2", // Escuro
          800: "#1e5b91", // Muito escuro
          900: "#154577", // Azul profundo
        },
        accent: {
          50: "#2a3a47", // Muito claro
          100: "#243544", // Versão mais clara
          200: "#1f2e3c", // Mais suave
          300: "#1a2835", // Cinza-azulado escuro
          400: "#161e2b", // Escuro
          500: "#10171f", // Versão mais escura
          600: "#0c1215", // Muito escuro
          700: "#0a0f13", // Profundo
          800: "#080c11", // Intenso
          900: "#060a0e", // Preto com um toque de cinza
        },
        background: {
          DEFAULT: "#f4f4f4", // Cor de fundo principal
          dark: "#121212", // Fundo escuro (modo noturno)
        },
        text: {
          DEFAULT: "#333333", // Texto principal
          light: "#f1f1f1", // Texto claro
          dark: "#ffffff", // Texto escuro (modo noturno)
        },
        border: {
          DEFAULT: "#e0e0e0", // Bordas padrão
          dark: "#303030", // Bordas no modo escuro
        },
      },
      fontFamily: {
        sans: ["Poppins", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
