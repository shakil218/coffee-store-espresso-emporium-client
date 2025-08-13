import React from "react";
import bgImage from "../assets/images/more/15.jpg";
import logo from "../assets/images/more/logo1.png";
import { Link, NavLink } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const Links = (
    <>
      <li><NavLink to={"/"}>Home</NavLink></li>
      <li><NavLink to={"/add-coffee"}>Add Coffee</NavLink></li>
      <li><NavLink to={"/users"}>Users</NavLink></li>
    </>
  );
  return (
    <div
      className="navbar  shadow-sm flex justify-center items-center bg-base-300"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-white lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm font-rancho text-xl dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <img src={logo} alt="logo" className="w-[50px] h-[65px] md:w-[75px] md:h[90px]" />
        <p className="font-rancho  md:text-4xl lg:text-5xl text-white">
          Espresso Emporium
        </p>
      </div>
      <div className="navbar-center text-white hidden lg:flex">
        <ul className="menu menu-horizontal font-rancho text-xl px-1 gap-2">{Links}</ul>
      </div>
      <div className="navbar-end">
        <Link to={'/login'} className="btn font-rancho">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
