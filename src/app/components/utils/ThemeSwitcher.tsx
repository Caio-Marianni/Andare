import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, toggleTheme } from "../../../state/themeSlice";
import { RootState } from "../../../state/store";
import { Moon, Sun } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  // Alterna entre os temas
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  // Adiciona/remove a classe dark das tags
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Verifica o tema no localStorage ao carregar a página
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      dispatch(setTheme(storedTheme));
    }
  }, [dispatch]);

  return (
    <button onClick={handleToggleTheme} className="bg-primary-200 rounded-full p-2 text-primary-300 hover:text-primary-600 hover:bg-primary-200 transition-all duration-300">
      {theme === "light" ? (
        <Moon size={24} />
      ) : (
        <Sun size={24} />
      )}
    </button>
  );
};

export default ThemeToggle;
