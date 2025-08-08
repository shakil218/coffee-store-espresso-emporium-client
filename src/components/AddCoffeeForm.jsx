import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const AddCoffeeForm = () => {
  return (
    <div className="w-9/12 mx-auto mb-20">
      <Link to={"/"} className="flex items-center gap-2 my-7">
        <IoIosArrowRoundBack
          size={24}
          className="text-[#331A15]"
        ></IoIosArrowRoundBack>
        <p className="font-rancho text-3xl text-[#374151]">Back to home</p>
      </Link>
      <div className=" bg-[#F4F3F0]">
        <div className="flex flex-col justify-center items-center text-center w-8/12 mx-auto">
          <h3 className="font-rancho text-5xl text-[#374151] mt-10">
            Add New Coffee
          </h3>
          <p className="text-lg my-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form className="flex flex-col gap-3 w-10/12 mx-auto">
          <div className="flex gap-3">
            <div className="w-full">
              <legend className="fieldset-legend">Name</legend>
              <input
                type="text"
                placeholder="Enter coffee name"
                className="input w-full"
              />
            </div>
            <div className="w-full">
              <legend className="fieldset-legend">Chef</legend>
              <input
                type="text"
                placeholder="Enter coffee chef"
                className="input w-full"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-full">
              <legend className="fieldset-legend">Supplier</legend>
              <input
                type="text"
                placeholder="Enter coffee supplier"
                className="input w-full"
              />
            </div>
            <div className="w-full">
              <legend className="fieldset-legend">Taste</legend>
              <input
                type="text"
                placeholder="Enter coffee taste"
                className="input w-full"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-full">
              <legend className="fieldset-legend">Category</legend>
              <input
                type="text"
                placeholder="Enter coffee category"
                className="input w-full"
              />
            </div>
            <div className="w-full">
              <legend className="fieldset-legend">Details</legend>
              <input
                type="text"
                placeholder="Enter coffee details"
                className="input w-full"
              />
            </div>
          </div>
          <div className="w-full">
            <legend className="fieldset-legend">Photo</legend>
            <input
              type="text"
              placeholder="Enter photo URL"
              className="input w-full"
            />
          </div>
          <input
            type="submit"
            value="Add Coffee"
            className="font-rancho text-2xl text-[#331A15] bg-[#D2B48C] border border-[#331A15] w-full h-14 mt-3 mb-10"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffeeForm;
