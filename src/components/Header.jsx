import React from "react";

const Header = () => {
  return (
    <header className="container mx-auto">
      <div className=" mx-10 h-[30rem] my-4 md:my-8 bg-[url('/header_img.png')] bg-center bg-cover bg-no-repeat relative overflow-hidden rounded-2xl grid place-items-start content-end pl-7 sm:pl-10  md:pl-14 pb-5 sm:pb-6 md:pb-8 lg:pb-10">
        <div className="  flex flex-col items-start justify-center max-w-[80%] lg:max-w-[50%] gap-y-2 animate-fadeIn ">
          <h1 className="font-semibold first-letter:uppercase text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white leading-none">
            order your favourite food here
          </h1>
          <p className="font-light text-white text-xs md:text-sm lg:text-base">
            Choose from a diverse menu featuring a delectable array of dishes.
            Our mossion is to satisfy your cravings and elevate your dining
            experience , one delicious meal at a time.
          </p>
          <button className="text-gray-700 font-medium py-1 sm:py-2 md:py-3 lg:py-4 px-2 sm:px-4 md:px-6 lg:px-8 bg-white text-xs sm:text-sm md:text-base rounded-full">
            View menu
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
