import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import ErrorImage from '../assets/images/404/404.gif'

const Error = () => {
  return (
    <div>
      <div className="flex justify-center mb-20 ">
        <Link to={"/"} className="flex items-center gap-2 my-7">
          <IoIosArrowRoundBack
            size={24}
            className="text-[#331A15]"
          ></IoIosArrowRoundBack>
          <p className="font-rancho text-3xl text-[#374151]">Back to home</p>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <img src={ErrorImage} alt="" />
      </div>
    </div>
  );
};

export default Error;
