import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Coffee from '../assets/images/coffee/1.png'

const CoffeeDetailsCard = () => {
  return (
    <div className="w-9/12 mx-auto mb-20">
      <Link to={"/"} className="flex items-center gap-2 my-7">
        <IoIosArrowRoundBack
          size={24}
          className="text-[#331A15]"
        ></IoIosArrowRoundBack>
        <p className="font-rancho text-3xl text-[#374151]">Back to home</p>
      </Link>
      <div className="bg-[#F4F3F0] w-full mx-auto m-10 p-10">
        <div className="card flex flex-row  items-center w-10/12 mx-auto">
          <figure className="w-6/12 ">
            <img
              src={Coffee}
              alt="Movie"
              
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-rancho text-4xl text-[#374151]">Niceties</h2>
            <div>
              <p><span className="font-semibold">Name:  </span>  Americano Coffee</p>
              <p><span className="font-semibold">Chef:  </span>  Mr. Matin Paul</p>
              <p><span className="font-semibold">Supplier:  </span>  Cappu Authorizer</p>
              <p><span className="font-semibold">Taste:  </span>  Sweet and hot</p>
              <p><span className="font-semibold">Category:  </span>  Americano</p>
              <p><span className="font-semibold">Details:  </span>  Espresso with hot water</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetailsCard;
