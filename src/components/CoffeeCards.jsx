import React from "react";
import { IoIosEye } from "react-icons/io";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import { Link } from "react-router-dom";

const CoffeeCards = ({ coffee, coffees, setCoffees }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="bg-[#F4F3F0]">
      <div className="card flex flex-row justify-around items-center w-10/12 mx-auto my-3">
        <figure className="w-5/12">
          <img
            src={coffee.photo}
            alt={coffee.name}
            className="w-full h-[300px] object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-rancho text-4xl text-[#374151]">
            Niceties
          </h2>
          <div>
            <p>
              <span className="font-semibold">Name: </span> {coffee.name}
            </p>
            <p>
              <span className="font-semibold">Chef: </span> {coffee.chef}
            </p>
            <p>
              <span className="font-semibold">Price: </span> {coffee.price}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Link to={`/details/${coffee._id}`}>
            <button className="btn btn-xs py-4 bg-[#D2B48C] text-white">
              <IoIosEye size={20}></IoIosEye>
            </button>
          </Link>
          <Link to={`/update-coffee/${coffee._id}`}>
            <button className="btn btn-xs py-4 bg-[#3C393B] text-white">
              <MdModeEdit size={20}></MdModeEdit>
            </button>
          </Link>
          <button
            onClick={() => handleDelete(coffee._id)}
            className="btn btn-xs py-4 bg-[#EA4744] text-white"
          >
            <MdDelete size={20}></MdDelete>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCards;
