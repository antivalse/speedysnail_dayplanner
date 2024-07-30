/**
 * Theme Context instance and Context Provider Function
 */

import React, { createContext, useEffect, useState } from "react";

// Define the ThemeContextType
export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

// Create a Theme context
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// Create theme context provider
interface ThemeContextProviderProps {
  children: React.ReactNode;
}

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize state from localStorage
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  // Sync state with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode((prevTheme: boolean) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
