import React from "react";
import "./Fooditem.css";
import { assets } from "../../assets/assets";
const Fooditem = ({ id, name, price, description, image }) => {
  return (
    <div
      className="card cd"
      style={{ height: "20rem", width: "18rem", borderRadius: "10px" }}
    >
      <img
        src={image}
        className="card-img-top h-50 image-fluide"
        alt="..."
        style={{ borderRadius: "10px" }}
      />
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title ">{name}</h5>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p style={{ color: "#676767", fontSize: "15px" }}>{description}</p>
        <p className="text-danger fs-5">${price}</p>
      </div>
    </div>
  );
};

export default Fooditem;
