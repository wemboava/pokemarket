import React, { createContext, useState, useContext } from "react";

const PokemonTypeContext = createContext({ types: [] });

const PokemonTypeProvider = ({ children }) => {
  const [types, setTypes] = useState([
    {
      id: 1,
      name: "grass",
      color: "#49D0B1",
    },
    {
      id: 2,
      name: "bug",
      color: "#3de651",
    },
    {
      id: 3,
      name: "water",
      color: "#58A9F4",
    },
    {
      id: 4,
      name: "electric",
      color: "#FFCE4C",
    },
    {
      id: 5,
      name: "fighting",
      color: "#FF4747",
    },
    {
      id: 6,
      name: "ice",
      color: "#57ebf4",
    },
    {
      id: 7,
      name: "fairy",
      color: "#ff91cd",
    },
    {
      id: 8,
      name: "fire",
      color: "#F7776A",
    },
    {
      id: 9,
      name: "psychic",
      color: "#7E528C",
    },
    {
      id: 10,
      name: "ground",
      color: "#B0736E",
    },
    {
      id: 11,
      name: "flying",
      color: "#84d6ff",
    },
    {
      id: 12,
      name: "rock",
      color: "#c4c4c4",
    },
    {
      id: 13,
      name: "normal",
      color: "#678678",
    },
    {
      id: 14,
      name: "dragon",
      color: "#f7ac3c",
    },
    {
      id: 15,
      name: "poison",
      color: "#BE7CF3",
    },
    {
      id: 16,
      name: "steel",
      color: "#c9BfB5",
    },
    {
      id: 17,
      name: "ghost",
      color: "#444",
    },
    {
      id: 18,
      name: "dark",
      color: "#444",
    },
    {
      id: 19,
      name: "unknown",
      color: "#444",
    },
    {
      id: 20,
      name: "shadow",
      color: "#444",
    },
  ]);

  return (
    <PokemonTypeContext.Provider value={{ types }}>
      {children}
    </PokemonTypeContext.Provider>
  );
};

function usePokemonType() {
  const context = useContext(PokemonTypeContext);

  if (!context) {
    throw new Error(`usePokemonType must be used within a PokemonTypeProvider`);
  }

  return context;
}

export { PokemonTypeProvider, usePokemonType };
