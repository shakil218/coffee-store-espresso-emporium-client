import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useLoaderData } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);

  const handleUserDelete = (id) => {
    console.log(id);
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
        fetch(`http://localhost:5000/users/${id}`, {
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
              const remainingUser = users.filter((user) => user._id !== id);
              setUsers(remainingUser);
            }
          });
      }
    });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="w-11/12 md:w-9/12 mx-auto overflow-x-auto my-5 md:my-14">
        <Link to={"/"} className="flex items-center gap-2 my-7">
          <IoIosArrowRoundBack
            size={24}
            className="text-[#331A15]"
          ></IoIosArrowRoundBack>
          <p className="font-rancho text-2xl md:text-3xl text-[#374151]">
            Back to home
          </p>
        </Link>
        <table className="table table-zebra">
          {/* head */}
          <thead className="font-rancho text-xl text-white bg-[#331A15]">
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Creation Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.creationTime}</td>
                <td>
                  <button
                    onClick={() => handleUserDelete(user._id)}
                    className="btn btn-xs py-4 bg-[#EA4744] text-white"
                  >
                    <MdDelete size={20}></MdDelete>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Users;
