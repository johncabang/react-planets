import React, { useState, createContext } from "react";
import { planetDatas } from "../data";

export const PlanetContext = createContext();

export const PlanetProvider = (props) => {
  const [planets, setPlanets] = useState({ planetDatas });
  // const [planet, setPlanet] = useState("earth");
  // const [content, setContent] = useState("overview");

  return (
    <PlanetContext.Provider value={[planets, setPlanets]}>
      {props.children}
    </PlanetContext.Provider>
  );
};
