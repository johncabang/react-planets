import React from "react";
import Footer from "../../components/Footer";
import Main from "../../components/Main";

import { planetsDatas } from "../../data";

const Home = () => {
  return (
    <>
      <Main planetsDatas={planetsDatas} />
      <Footer />
    </>
  );
};

export default Home;
