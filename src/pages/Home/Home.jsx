import React, { useState } from "react";
import Header from "../../components/Header";
import ExploreMenu from "../../components/ExploreMenu";
import FoodListDisplay from "../../components/FoodListDisplay";
import AppDownload from "../../components/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("All");
  const selectCategory = (categoryName) => {
    setCategory(categoryName == category ? "All" : categoryName);
  };
  return (
    <>
      <Header />
      <ExploreMenu selectCategory={selectCategory} category={category} />
      <FoodListDisplay category={category} />
      <AppDownload />
    </>
  );
};

export default Home;
