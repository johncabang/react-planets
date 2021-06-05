import React, { useState, createContext } from "react";
import { planetDatas } from "../data";

export const PlanetContext = createContext();

export const PlanetProvider = (props) => {
  const [planets, setPlanets] = useState({ planetDatas });
  const [planet, setPlanet] = useState("Earth");
  const [content, setContent] = useState("overview");

  const value = {
    planets,
    setPlanets,
    planet,
    setPlanet,
    content,
    setContent,
  };

  return (
    <PlanetContext.Provider value={[value]}>
      {props.children}
    </PlanetContext.Provider>
  );
};
