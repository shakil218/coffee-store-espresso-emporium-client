import React from "react";
import { GiCoffeeCup } from "react-icons/gi";
import BgImage from "../assets/images/more/1.png";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <div
        className=" flex justify-center min-h-screen bg-cover bg-no-repeat mt-12"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        {/* Main Content */}
        <div className="z-10 w-full max-w-5xl p-4">
          <div className="flex flex-col justify-center items-center mb-8 ">
            <p>--- Sip & Savor ---</p>
            <h3 className="font-rancho text-6xl text-[#331A15] my-2 ">
              Our Popular Products
            </h3>
            <Link to={"/add-coffee"}>
              <button className="font-rancho flex justify-center items-center gap-1 bg-[#E3B577] w-36 h-12 text-2xl text-white">
                Add Coffee <GiCoffeeCup className=" text-black"></GiCoffeeCup>
              </button>
            </Link>
          </div>
          {/* Your product grid here */}
        </div>
      </div>
    </div>
  );
};

export default Products;
