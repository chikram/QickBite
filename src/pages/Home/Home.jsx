import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Header from "../../components/Header/Header";
import "./Home.css";
import React from "react";

const Home = () => {
  return (
    <div className="container-fluid my-3">
      <Header />
      <ExploreMenu />
    </div>
  );
};

export default Home;
