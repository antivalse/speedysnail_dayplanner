/**
 * Theme Context instance and Context Provider Function
 */

import { createContext, useEffect, useState } from "react";

// Create a Theme context

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

// Create theme context provider

interface ThemeContextProviderProps {
  children: React.ReactNode;
}
const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  // Create a function to change theme from dark to light and vice versa

  const toggleTheme = () => {
    setIsDarkMode((prevTheme: boolean) => {
      const newTheme = !prevTheme;
      localStorage.setItem("theme", JSON.stringify(newTheme));
      return newTheme;
    });

    // Sync state with localStorage when component mounts
    useEffect(() => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme !== null) {
        setIsDarkMode(JSON.parse(savedTheme));
      }
    }, []);
  };
  return (
    <>
      <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeContextProvider;
