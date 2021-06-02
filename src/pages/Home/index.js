import React from "react";
import Footer from "../../components/Footer";
import Content from "../../components/Content";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";

import { planetDatas } from "../../data";

const Home = (props) => {
  return (
    <>
      <Navbar planetDatas={planetDatas} setPlanet={props.setPlanet} />
      <Content planetDatas={planetDatas} planet={props.planet} />
      <Button content={props.content} setContent={props.setContent} />
      <Footer planetDatas={planetDatas} planet={props.planet} />
    </>
  );
};

export default Home;
