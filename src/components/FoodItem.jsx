import React, { useContext, useState } from "react";
import {
  BsCartDashFill,
  BsFillCartPlusFill,
  BsStar,
  BsStarFill,
} from "react-icons/bs";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ item }) => {
  const { cartItems, food_list, addToCart, removeFromCart } =
    useContext(StoreContext);
  return (
    <div
      className={`group relative bg-gray-50 rounded-xl shadow overflow-hidden transition-all duration-500 hover:shadow-lg border ${
        cartItems[item._id] != null
          ? "border-transparent border-orange-500"
          : ""
      }`}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {cartItems[item._id] != null && (
          <span className="bg-orange-600 shadow-lg shadow-orange-900 text-white text-sm font-bold h-8 w-8 flex items-center justify-center rounded-full absolute top-3 left-3">
            {cartItems[item._id].Qty}
          </span>
        )}

        <div
          className={`absolute bottom-0 left-0 right-0 p-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex ${
            cartItems[item._id] != null ? "justify-between" : "justify-end"
          } `}
        >
          {cartItems[item._id] != null && (
            <button
              className=" bg-orange-600 text-white p-4 rounded-full font-medium hover:bg-orange-500 transition-colors duration-300 shadow-lg shadow-orange-900"
              onClick={() => removeFromCart(item._id)}
            >
              <BsCartDashFill />
            </button>
          )}

          <button
            className=" bg-orange-600 text-white p-4 rounded-full font-medium hover:bg-orange-500 transition-colors duration-300 shadow-lg shadow-orange-900"
            onClick={() => addToCart(item._id)}
          >
            <BsFillCartPlusFill />
          </button>
        </div>
      </div>
      <div className="p-5 space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="text-sm font-bold text-black capitalize">
            {item.name}
          </h3>
          <div className=" flex  gap-x-1 text-orange-500">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStar />
          </div>
        </div>
        <div className=" space-y-3">
          <p className="text-xs text-gray-800 font-light">{item.description}</p>
          <p className="text-xl font-bold text-orange-500 ">{`$${item.price}`}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
