import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";
import Coffee from '../assets/images/coffee/1.png'

const CoffeeDetailsCard = () => {
  const coffee = useLoaderData();
  return (
    <div className="w-9/12 mx-auto mb-20">
      <Link to={"/"} className="flex items-center gap-2 my-7">
        <IoIosArrowRoundBack
          size={24}
          className="text-[#331A15]"
        ></IoIosArrowRoundBack>
        <p className="font-rancho text-xl md:text-3xl text-[#374151]">Back to home</p>
      </Link>
      <div className="bg-[#F4F3F0] w-full mx-auto m-10 p-10">
        <div className="card flex flex-col lg:flex-row items-center w-11/12 mx-auto">
          <figure className="md:w-6/12">
            <img
              src={coffee.photo}
              alt={coffee.name}
              
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title font-rancho text-2xl md:text-3xl lg:text-4xl text-[#374151]">Niceties</h2>
            <div>
              <p><span className="font-semibold">Name:  </span>{coffee.name}</p>
              <p><span className="font-semibold">Chef:  </span>{coffee.chef}</p>
              <p><span className="font-semibold">Supplier:  </span>{coffee.supplier}</p>
              <p><span className="font-semibold">Taste:  </span>{coffee.taste}</p>
              <p><span className="font-semibold">Category:  </span>{coffee.category}</p>
              <p><span className="font-semibold">Details:  </span>{coffee.details}</p>
              <p><span className="font-semibold">Details:  </span>{coffee.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetailsCard;
