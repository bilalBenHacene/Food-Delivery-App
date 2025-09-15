import React from "react";
import { menu_list } from "../assets/assets";

const ExploreMenu = ({ selectCategory, category }) => {
  return (
    <section className="container mx-auto " id="explore-menu">
      <div className="mx-10 flex flex-col items-center justify-center gap-y-3 md:gap-y-4 lg:gap-y-5">
        <h1 className="font-bold text-gray-700 text-2xl md:text-4xl">
          Explore our menu
        </h1>
        <p className=" w-full lg:max-w-[60%] font-light text-center text-gray-700 text-xs sm:text-sm md:text-base">
          Choose from a diverse menu featuring a delectable array of dishes. Our
          mossion is to satisfy your cravings and elevate your dining experience
          , one delicious meal at a time.
        </p>
        {/* flex justify-between items-center */}
        <section className="menu-list-container  gap-x-3 md:gap-x-4 lg:gap-x-5 flex justify-start items-center overflow-x-scroll w-full h-[8rem] md:h-[10rem] lg:h-[12rem]">
          {menu_list.map((item, index) => (
            <button
              key={index}
              className={`
                ${
                  category == "All"
                    ? `bg-gray-100 `
                    : category == item.menu_name
                    ? `bg-gray-200  border-gray-300`
                    : "saturate-50 bg-gray-100 "
                } px-2 py-3 rounded-xl border border-transparent h-[90%] w-[5rem] md:w-[8rem] lg:w-[10rem] flex flex-col justify-start items-center gap-y-2`}
              onClick={() => selectCategory(item.menu_name)}
            >
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className={`${
                  category == item.menu_name
                    ? "border-red-500 shadow-lg"
                    : "border-gray-300"
                } border-2 rounded-full h-[4rem] w-[4rem] md:h-[5rem] md:w-[5rem] lg:h-[7rem] lg:w-[7rem] object-cover`}
              />
              <p className="text-center min-w-[10rem] font-semibold cursor-pointer text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap flex-1">
                {item.menu_name}
              </p>
            </button>
          ))}
        </section>
        <hr className="my-3 h-px bg-gray-700 w-full" />
      </div>
    </section>
  );
};

export default ExploreMenu;
