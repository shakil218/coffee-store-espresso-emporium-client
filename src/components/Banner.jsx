import React from "react";
import bannerImg from "../assets/images/more/3.png";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex md:justify-end justify-center items-center text-center md:text-left"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="w-1/2">
        <div className="w-11/12 my-5">
          <h3 className="font-rancho text-3xl md:text-4xl lg:text-5xl text-white">
            Would you like a Cup of Delicious Coffee?
          </h3>
          <p className="text-white my-5">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="font-rancho text-2xl h-12 w-32 bg-[#E3B577]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
