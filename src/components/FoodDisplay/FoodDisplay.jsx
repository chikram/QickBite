import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import Fooditem from "../Fooditem/Fooditem";
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="container-fluid">
      <h2>Top Dishes near You</h2>
      <div className="row py-3 center">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <div className="py-3 col-8 col-sm-6 col-md-6 col-xl-3 col-lg-4 ">
                <Fooditem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
