import React, { useContext } from "react";

import { PlanetContext } from "../../context/PlanetContext";

const PlanetImage = () => {
  const [planets] = useContext(PlanetContext);

  const data = planets.planets.planetDatas.filter(
    (val) => val.name === planets.planet
  );

  return (
    <>
      {data.map((val) => {
        return (
          <div key={val.id}>
            {planets.content === "overview" && (
              <img src={val.images.planet} alt={val.name} />
            )}
            {planets.content === "internal" && (
              <img src={val.images.internal} alt={val.name} />
            )}
            {planets.content === "geology" && (
              <img src={val.images.geology} alt={val.name} />
            )}
          </div>
        );
      })}
    </>
  );
};

export default PlanetImage;
