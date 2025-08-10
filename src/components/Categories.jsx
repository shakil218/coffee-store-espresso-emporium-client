import React from "react";
import AwesomeAroma from "../assets/images/icons/1.png";
import HighQuality from "../assets/images/icons/2.png";
import PureGrades from "../assets/images/icons/3.png";
import ProperRoasting from "../assets/images/icons/4.png";

const Categories = () => {
  return (
    <div className="flex justify-center items-center bg-[#ECEAE3] py-10">
      <div className=" md:flex w-9/12 mx-auto justify-center items-center gap-2">
        <div className="flex flex-col justify-center md:justify-baseline items-center md:items-baseline text-center md:text-left">
          <img src={AwesomeAroma} alt="" />
          <h4 className="font-rancho text-4xl my-3">Awesome Aroma</h4>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className="flex flex-col justify-center md:justify-baseline items-center md:items-baseline text-center md:text-left mt-5 md:mt-0">
          <img src={HighQuality} alt="" />
          <h4 className="font-rancho text-4xl my-3">High Quality</h4>
          <p>We served the coffee to you maintaining the best quality</p>
        </div>
        <div className="flex flex-col justify-center md:justify-baseline items-center md:items-baseline text-center md:text-left mt-5 md:mt-0">
          <img src={PureGrades} alt="" />
          <h4 className="font-rancho text-4xl my-3">Pure Grades</h4>
          <p>
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div className="flex flex-col justify-center md:justify-baseline items-center md:items-baseline text-center md:text-left mt-5 md:mt-0">
          <img src={ProperRoasting} alt="" />
          <h4 className="font-rancho text-4xl my-3">Proper Roasting</h4>
          <p>Your coffee is brewed by first roasting the green coffee beans</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
