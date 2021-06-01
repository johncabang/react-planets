import React from "react";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import Navbar from "../../components/Navbar";

import { planetsDatas } from "../../data";

const Home = () => {
  return (
    <>
      <Navbar planets={planetsDatas} />
      <Main planetsDatas={planetsDatas} />
      <Footer />
    </>
  );
};

export default Home;
