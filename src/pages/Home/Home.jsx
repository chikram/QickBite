import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Header from "../../components/Header/Header";
import "./Home.css";
import { useState } from "react";
import React from "react";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className="container-fluid my-3">
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;
