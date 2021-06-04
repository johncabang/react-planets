import React from "react";
import Footer from "../../components/Footer";
import Content from "../../components/Content";
import Navbar from "../../components/Navbar";

import { planetDatas } from "../../data";
import Test from "../../components/Test";

const Home = ({ planet, setPlanet, content, setContent }) => {
  return (
    <>
      <Navbar planetDatas={planetDatas} setPlanet={setPlanet} />
      <Content
        planetDatas={planetDatas}
        planet={planet}
        content={content}
        setContent={setContent}
      />
      <Footer planetDatas={planetDatas} planet={planet} />
      <Test />
    </>
  );
};

export default Home;
