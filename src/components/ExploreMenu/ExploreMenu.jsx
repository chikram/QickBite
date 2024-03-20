import React from "react";
import { menu_list } from "../../assets/assets";
import "./Explore.css";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="container-fluid my-3">
      <h1>Explore Menu</h1>
      <p>Chose Your Favourite Food item from the give list</p>
      <div className="d-flex menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              className="p-3 menu-item-list "
              key={index}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
            >
              <img
                id="menu-img"
                src={item.menu_image}
                alt="menu"
                className={category === item.menu_name ? "active" : ""}
              />
              <p className="text-center pt-2">{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
