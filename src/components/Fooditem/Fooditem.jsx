import React, { useContext } from "react";
import "./Fooditem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const Fooditem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div
      className="card cd"
      style={{
        height: "20rem",
        width: "18rem",
        borderRadius: "10px",
        position: "relative",
      }}
    >
      <img src={image} className="card-img-top h-50 image-fluide" alt="..." />
      {!cartItems[id] ? (
        <img
          width={35}
          src={assets.add_icon_white}
          alt="plus"
          style={{
            color: "#0c0d0d",
            position: "absolute",
            top: "35%",
            left: "85%",
          }}
          onClick={() => addToCart(id)}
        />
      ) : (
        <div
          className="d-flex"
          style={{
            position: "absolute",
            top: "37%",
            left: "58%",
            backgroundColor: "white",
            borderRadius: "20px",
          }}
        >
          <img
            width={45}
            src={assets.remove_icon_red}
            alt="minus"
            style={{ color: "#0a0a0a" }}
            onClick={() => removeFromCart(id)}
            className="px-2"
          />
          <p
            style={{ fontSize: "13px" }}
            className="px-1 my-auto text-dark fw-bold"
          >
            {cartItems[id]}
          </p>
          <img
            width={45}
            src={assets.add_icon_green}
            alt="plus"
            style={{ color: "#06ac7a" }}
            onClick={() => addToCart(id)}
            className="px-2"
          />
        </div>
      )}

      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title">{name}</h5>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p style={{ color: "#676767", fontSize: "15px" }}>{description}</p>
        <p className="text-danger fs-5">${price}</p>
      </div>
    </div>
  );
};

export default Fooditem;
