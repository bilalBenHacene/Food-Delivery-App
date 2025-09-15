import React from "react";
import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <section className="container mx-auto px-8" id="mobile-app">
      <div className="my-6 md:my-8 lg:my-10 space-y-3">
        <p className="font-bold md:font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center capitalize">
          For Better Experience <br /> Tomato App
        </p>
        <section className="flex items-center justify-between sm:justify-center gap-x-10">
          <a href="#" className="group">
            <img
              src={assets.play_store}
              alt=""
              className="transition-transform  duration-200 group-hover:scale-105"
            />
          </a>
          <a href="#" className="group">
            <img
              src={assets.app_store}
              alt=""
              className="transition-transform duration-200 group-hover:scale-105"
            />
          </a>
        </section>
      </div>
    </section>
  );
};

export default AppDownload;
