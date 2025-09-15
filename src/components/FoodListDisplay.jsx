import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodListDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  // console.log(food_list);

  return (
    <section id="food-list" className="container mx-auto">
      <div className="px-8 space-y-4">
        <h2 className="font-bold text-gray-700 text-2xl">
          Top dishes near you
        </h2>
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {food_list.map((item, index) => {
            if (category == "All" || category == item.category) {
              return <FoodItem key={index} item={item} />;
            }
          })}
        </main>
      </div>
    </section>
  );
};

export default FoodListDisplay;
