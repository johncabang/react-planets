import React, { useContext } from "react";
import { PlanetContext } from "../context/PlanetContext";

const Test = () => {
  const [planets, setPlanets] = useContext(PlanetContext);

  return (
    <>
      {planets.planetDatas.map((val) => (
        <div>{val.name}</div>
      ))}
      {/* {console.log(planets.planetDatas)} */}
    </>
  );
};

export default Test;
