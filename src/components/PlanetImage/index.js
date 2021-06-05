import React, { useContext } from "react";

import { PlanetContext } from "../../context/PlanetContext";

const PlanetImage = ({ planet, content, setContent }) => {
  const [planets] = useContext(PlanetContext);

  const data = planets.planetDatas.filter((val) => val.name === planet);

  return (
    <>
      {data.map((val) => {
        return (
          <div key={val.id}>
            {content === "overview" && (
              <img src={val.images.planet} alt={val.name} />
            )}
            {content === "internal" && (
              <img src={val.images.internal} alt={val.name} />
            )}
            {content === "geology" && (
              <img src={val.images.geology} alt={val.name} />
            )}
          </div>
        );
      })}
    </>
  );
};

export default PlanetImage;
