import React from "react";
import Logo from "../assets/images/more/logo1.png";
import BgImg from "../assets/images/more/13.jpg";
import FooterBgImg from "../assets/images/more/15.jpg";
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <div>
      <footer
        className="footer sm:footer-horizontal bg-base-200 text-base-content"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="w-8/12 mx-auto my-14">
          <img src={Logo} alt="" className="w-[75px] h[90px]" />
          <div className="flex justify-between ">
            <div>
              <p className="font-rancho text-5xl text-[#331A15] my-3">
                Espresso Emporium
              </p>
              <p className="text-xl text-[#1B1A1A]">
                Always ready to be your friend. Come & Contact with us to share
                your memorable moments, to share with your best companion.
              </p>
              <div className="flex gap-2 text-[#331A15] my-3">
                <MdFacebook size={30}></MdFacebook>
                <FaTwitter size={30}></FaTwitter>
                <FaInstagram size={30}></FaInstagram>
                <FaLinkedin size={30}></FaLinkedin>
              </div>
              <p className="font-rancho text-4xl text-[#331A15]">
                Get in Touch
              </p>
              <div className="flex flex-col gap-2 my-3">
                <p className="flex items-center gap-2 text-[#1B1A1A]">
                  <BsFillTelephoneFill></BsFillTelephoneFill>+88 01533 333 333
                </p>
                <p className="flex items-center gap-2 text-[#1B1A1A]">
                  <GrMail></GrMail>info@gmail.com
                </p>
                <p className="flex items-center gap-2 text-[#1B1A1A]">
                  <FaLocationDot></FaLocationDot>72, Wall street, King Road,
                  Dhaka
                </p>
              </div>
            </div>
            <form>
              <p className="font-rancho text-5xl text-[#331A15] my-3">
                Connect with Us
              </p>
              <fieldset className="flex flex-col gap-3 w-80">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="input input-sm border-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="input input-sm border-none"
                />
                <textarea
                  placeholder="Message"
                  className="textarea textarea-sm border-none"
                ></textarea>
                <input type="submit" value="Send Message"  className="bg-white w-[150px] h-12 font-rancho text-2xl text-[#331A15] border border-[#331A15] rounded-full" />
              </fieldset>
            </form>
          </div>
        </div>
      </footer>
      <p
        className="font-rancho text-xl flex justify-center items-center text-center text-white h-14"
        style={{ backgroundImage: `url(${FooterBgImg})` }}
      >
        Copyright Espresso Emporium ! All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
