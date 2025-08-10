import React from "react";
import bgImage from "../assets/images/more/15.jpg";
import logo from "../assets/images/more/logo1.png";

const Navbar = () => {
  return (
    <div
      className="flex justify-center items-center navbar bg-base-300"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <img src={logo} alt="" className="w-[75px] h[90px]" />
      <p className="font-rancho text-3xl md:text-4xl lg:text-6xl text-white">Espresso Emporium</p>
    </div>
  );
};

export default Navbar;
