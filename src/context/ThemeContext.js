import React, { createContext, useState } from "react";
import { darkTheme } from "../theme/dark";
import { lightTheme } from "../theme/light";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const theme = mode === "dark" ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
