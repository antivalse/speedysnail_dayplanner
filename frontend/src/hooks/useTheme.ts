/**
 * Custom hook for handling theme changes
 */

import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("Something went wrong when trying to use Theme Context");
  }
  return themeContext;
};

export default useTheme;
