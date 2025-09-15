import React from "react";
import { assets } from "../assets/assets";
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      className=" bg-zinc-900 mt-10 flex flex-col justify-center  divide-y divide-zinc-500 space-y-5"
      id="footer"
    >
      <section className="px-8 pt-14 container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-5">
        <div className="text-white space-y-5 sm:col-span-2">
          <img src={assets.logo} alt="" className="w-36" />
          <p className="text-xs font-light ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            ullam possimus repellat quis deleniti eum. Voluptates sunt earum
            dolorem, quasi necessitatibus debitis maiores aspernatur dolores
            blanditiis.
          </p>
          <div className="flex items-center justify-start gap-x-2">
            <a
              href="#"
              className="hover:bg-zinc-700 rounded-full transition-colors"
            >
              <img src={assets.facebook_icon} alt="" className="w-10" />
            </a>
            <a
              href="#"
              className="hover:bg-zinc-700 rounded-full transition-colors"
            >
              <img src={assets.twitter_icon} alt="" className="w-10" />
            </a>
            <a
              href="#"
              className="hover:bg-zinc-700 rounded-full transition-colors"
            >
              <img src={assets.linkedin_icon} alt="" className="w-10" />
            </a>
          </div>
        </div>
        <div className="text-white space-y-3 md:pl-5">
          <h3 className="text-2xl font-bold uppercase">company</h3>
          <ul className="font-normal text-sm space-y-1">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Delivery</a>
            </li>
            <li>
              <a href="">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div className="text-white space-y-3 md:pl-5">
          <h3 className="text-2xl font-bold uppercase">Get in touch</h3>
          <ul className="font-normal text-sm space-y-1">
            <li>
              <a href="">+1-212-456-7890</a>
            </li>
            <li>
              <a href="">contact@tomato.com</a>
            </li>
          </ul>
        </div>
        <div></div>
      </section>
      {/* <hr className="bg-gray-400 " /> */}
      <section className="text-center py-4 text-xs text-white flex justify-center items-center">
        Copyright 2025 <MdOutlineCopyright className="mx-1 text-sm" />{" "}
        Tomato.com - All Right Reserved.
      </section>
    </footer>
  );
};

export default Footer;
