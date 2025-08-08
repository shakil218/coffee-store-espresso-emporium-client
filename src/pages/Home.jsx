import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import { Outlet } from "react-router-dom";
import Products from "../components/Products";
import Social from "../components/Social";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Categories></Categories>
      <Products></Products>
      <Social></Social>
      <Footer></Footer>
    </div>
  );
};

export default Home;
