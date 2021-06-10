import React from "react";
import Footer from "../../components/Footer";
import Content from "../../components/Content";
import Navbar from "../../components/Navbar";
import Drawer from "../../components/Drawer";

const Home = () => {
  return (
    <>
      <Drawer />
      <Navbar />
      <Content />
      <Footer />
    </>
  );
};

export default Home;
