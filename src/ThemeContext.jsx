import React, { createContext, useContext, useState, useEffect } from "react";

// 1️⃣ Vytvoření kontextu
const ThemeContext = createContext();

// 2️⃣ Named export ThemeProvider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // při změně theme aktualizuj <html data-theme="...">
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // toggle funkce pro přepínání
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3️⃣ Hook pro snadné použití v komponentách
export const useTheme = () => useContext(ThemeContext);
