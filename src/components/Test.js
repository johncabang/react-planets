import React, { useContext } from "react";
import { PlanetContext } from "../context/PlanetContext";

const Test = () => {
  const [{ planets }] = useContext(PlanetContext);

  return (
    <>
      {/* {console.log(planets.planetDatas)} */}
      {planets.planetDatas.map((val) => (
        <div key={val.id}>{val.name}</div>
      ))}
    </>
  );
};

export default Test;
