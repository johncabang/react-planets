import React, { useContext } from "react";
import {
  DrawerContainer,
  DrawerWrapper,
  DrawerUL,
  DrawerLI,
  DrawerPlanets,
  DrawerPlanetColor,
} from "./DrawerElements";

import { PlanetContext } from "../../context/PlanetContext";

const Drawer = () => {
  const [{ planets, setPlanet, isOpen, toggle }] = useContext(PlanetContext);

  return (
    <DrawerContainer isOpen={isOpen} onClick={toggle}>
      <DrawerWrapper>
        <DrawerUL>
          {planets.planetDatas.map((val) => {
            return (
              <DrawerLI key={val.id}>
                <DrawerPlanets onClick={() => setPlanet(val.name)}>
                  <DrawerPlanetColor planetColor={val.color} />
                  {val.name}
                  <div style={{ margin: "0" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="8"
                    >
                      <path
                        fill="none"
                        stroke="#FFF"
                        opacity=".4"
                        d="M1 0l4 4-4 4"
                      />
                    </svg>
                  </div>
                </DrawerPlanets>
              </DrawerLI>
            );
          })}
        </DrawerUL>
      </DrawerWrapper>
    </DrawerContainer>
  );
};

export default Drawer;
