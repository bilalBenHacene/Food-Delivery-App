import React, { useState } from "react";
import { assets } from "../assets/assets";
const LoginPopup = ({ setShowLoginForm }) => {
  const [currentState, setCurrentState] = useState("Sign in");
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 z-30 flex items-center justify-center transition-colors duration-500  ${
        currentState == "Sign in" ? "bg-black/40" : "bg-white"
      }`}
    >
      <div
        className={`p-8 md:p-12 w-full md:w-[30rem] bg-white h-full md:h-[35rem] md:rounded-3xl  transition-all duration-500 ${
          currentState == "Sign in" ? "shadow-lg" : ""
        }`}
      >
        <div className="mb-8 ">
          <p className="text-gray-600 mb-5 flex items-center justify-center">
            Welcome to <img src={assets.logo} alt="logo" className="h-8" />
          </p>
          <h1 className="text-4xl font-bold">
            {currentState == "Sign in" ? "Sign in" : "Sign up"}
          </h1>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-6">
            {currentState == "Sign up" && (
              <div className="space-y-2">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter your username
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Username "
                  className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            )}

            <div className="space-y-2">
              <label
                for="email"
                className="block text-sm font-medium text-gray-700"
              >
                Enter your email address
              </label>
              <input
                id="email"
                type="text"
                placeholder="Email address"
                className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label
                for="password"
                className="block text-sm font-medium text-gray-700"
              >
                Enter your Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <div className="flex justify-between items-center text-sm ">
                {currentState == "Sign in" && (
                  <a href="#" className="text-red-500 ">
                    Forgot Password?
                  </a>
                )}
                <div className=" ">
                  <span className="text-gray-500 mr-2 inline-block">
                    {`${currentState == "Sign in" ? "No" : "Have"} Account?`}
                  </span>
                  <button
                    onClick={() =>
                      setCurrentState(
                        currentState == "Sign in" ? "Sign up" : "Sign in"
                      )
                    }
                    className="text-red-500 font-medium"
                  >
                    {`Sign ${currentState == "Sign in" ? "up" : "in"}`}
                  </button>
                </div>
              </div>
            </div>
            <section
              className={` ${
                currentState == "Sign up"
                  ? "flex justify-between items-center gap-x-5"
                  : "space-y-5"
              }`}
            >
              <button
                type="submit"
                className="w-full h-12 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md transition duration-200"
              >
                {`Sign ${currentState == "Sign in" ? "in" : "up"}`}
              </button>
              <button
                onClick={() => setShowLoginForm(false)}
                className="text-sm text-red-500 text-center w-full hover:bg-red-100 h-12 rounded-md transition duration-200"
              >
                Cancel
              </button>
            </section>
          </div>
        </form>
      </div>
      {/* <div className="p-8 md:p-12 w-full md:w-[35rem] flex items-center justify-center"></div> */}
    </div>
  );
};

export default LoginPopup;
