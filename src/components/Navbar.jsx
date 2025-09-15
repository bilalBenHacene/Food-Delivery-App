import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { CgMenuRightAlt } from "react-icons/cg";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowLoginForm }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const { cartItems } = useContext(StoreContext);
  const navbarLinks = [
    {
      label: "home",
      page: "/",
    },
    {
      label: "menu",
      section: "#explore-menu",
    },
    {
      label: "mobile-app",
      section: "#mobile-app",
    },
    {
      label: "contact us",
      section: "#footer",
    },
  ];
  const [activeLink, setActiveLink] = useState("home");
  return (
    <nav className=" shadow-md z-10 fixed bg-white w-full top-0">
      <section className="container mx-auto px-5 flex items-center justify-between h-20 ">
        <Link to={"/"}>
          <img src={assets.logo} alt="" className="w-28  md:w-32 lg:w-36" />
        </Link>
        <ul className=" flex-1 hidden md:flex items-center justify-center md:gap-x-7 lg:gap-x-10 text-gray-600 capitalize h-full ">
          {navbarLinks.map((link, index) => (
            <li
              key={index}
              onClick={(e) => setActiveLink(link.label)}
              className={`${
                activeLink === link.label
                  ? "pb-1 font-medium border-b-2 border-t-2 border-b-red-600 border-t-red-600 bg-red-100 text-red-950 "
                  : ""
              } pt-1 px-3 h-full flex items-center justify-center text-xs md:text-sm lg:text-base`}
            >
              {link.page ? (
                <Link to={link.page}>{link.label}</Link>
              ) : (
                <a href={link.section}>{link.label}</a>
              )}
            </li>
          ))}
        </ul>
        <div className="navbar-right flex items-center justify-center gap-x-3 sm:gap-x-5 md:gap-x-8 lg:gap-x-10">
          <img
            src={assets.search_icon}
            alt="search_icon"
            className="h-5 md:h-8"
          />
          <section className="relative  ">
            {Object.entries(cartItems).length > 0 && (
              <>
                <span className="hidden text-white text-xs bg-red-600 absolute -top-2 -right-[0.4rem] h-5 w-5 sm:flex items-center justify-center rounded-full">
                  {Object.entries(cartItems).length}
                </span>
                <span className="sm:hidden text-white text-xs bg-red-600 absolute -top-1 -right-1 h-2 w-2 flex items-center justify-center rounded-full"></span>
              </>
            )}

            <Link to={"/cart"}>
              <img
                src={assets.basket_icon}
                alt="basket_icon"
                className="h-5 md:h-8"
              />
            </Link>
          </section>
          <button
            onClick={() => setShowLoginForm(true)}
            className=" border px-3 md:px-5 py-1 text-xs sm:text-sm md:text-base md:py-2 rounded-full text-gray-600 border-red-500 hover:bg-red-500 transition-colors hover:text-white whitespace-nowrap"
          >
            sign in
          </button>
          <button
            className="text-3xl cursor-pointer md:hidden "
            onClick={() => {
              setIsOpen(!isOpen);
              setIsClicked(!isClicked);
            }}
          >
            <CgMenuRightAlt />
          </button>
        </div>
      </section>
      <section
        className={`phone-menu transition-all duration-300 ease-out overflow-hidden  ${
          isClicked ? "max-h-40 py-2" : "max-h-0"
        }`}
      >
        <ul
          className={`flex md:hidden flex-col items-start justify-center gap-y-2 text-gray-600 capitalize `}
        >
          {navbarLinks.map((link, index) => (
            <li
              key={index}
              onClick={(e) => setActiveLink(link.label)}
              className={`${
                activeLink === link.label
                  ? "pb-1 font-medium border-r-2 border-l-2 border-r-red-600 border-l-red-600 bg-red-100 text-red-950 "
                  : ""
              } pt-1 px-3 w-full`}
            >
              {link.page ? (
                <Link
                  to={link.page}
                  onClick={() => {
                    setIsOpen(!isOpen);
                    setIsClicked(!isClicked);
                  }}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.section}
                  onClick={() => {
                    setIsOpen(!isOpen);
                    setIsClicked(!isClicked);
                  }}
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
