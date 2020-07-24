import React, { createContext, useContext, useState, useEffect } from "react";
import themes from "../styles/themes";

const ThemeContext = createContext({
  theme: { color: { primary: "#fff" } },
  changeTheme: () => {},
});

const CurrentThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const storageValue = localStorage.getItem("theme");

    if (storageValue) {
      return JSON.parse(storageValue);
    }
    return {};
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  function changeTheme(newTheme) {
    setTheme(themes[newTheme]);
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(`useTheme must be used within a CurrentThemeProvider`);
  }

  return context;
}

export { CurrentThemeProvider, useTheme };
