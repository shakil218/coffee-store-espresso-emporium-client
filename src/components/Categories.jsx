import React from "react";
import AwesomeAroma from "../assets/images/icons/1.png";
import HighQuality from "../assets/images/icons/2.png";
import PureGrades from "../assets/images/icons/3.png";
import ProperRoasting from "../assets/images/icons/4.png";

const Categories = () => {
  return (
    <div className="flex justify-center items-center bg-[#ECEAE3] h-[300px]">
      <div className="flex w-8/12 m-auto justify-center items-center gap-2">
        <div>
          <img src={AwesomeAroma} alt="" />
          <h4 className="font-rancho text-4xl my-3">Awesome Aroma</h4>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img src={HighQuality} alt="" />
          <h4 className="font-rancho text-4xl my-3">High Quality</h4>
          <p>We served the coffee to you maintaining the best quality</p>
        </div>
        <div>
          <img src={PureGrades} alt="" />
          <h4 className="font-rancho text-4xl my-3">Pure Grades</h4>
          <p>
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div>
          <img src={ProperRoasting} alt="" />
          <h4 className="font-rancho text-4xl my-3">Proper Roasting</h4>
          <p>Your coffee is brewed by first roasting the green coffee beans</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
