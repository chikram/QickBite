import React from "react";
import { menu_list } from "../../assets/assets";
import "./Explore.css";
const ExploreMenu = () => {
  return (
    <div className="container-fluid my-3">
      <h1>Explore Menu</h1>
      <p>Chose Your Favourite Food item from the give list</p>
      <div className="d-flex menu-list">
        {menu_list.map((item, index) => {
          return (
            <div className="p-3 menu-item-list " key={index}>
              <img src={item.menu_image} alt="" />
              <p className="text-center pt-2">{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
