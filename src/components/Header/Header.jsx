import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <div
      className="container-fluid position-relative main-header"
      style={{ marginTop: "5%" }}
    >
      <img src="header_img.png" alt="header" width={"100%"} className="" />
      <div className="translate-middle-y position-absolute top-50 start-30 text-white">
        <h1 className="fw-bold  fav-food">
          Order Your <br /> Favourite Food here
        </h1>
        <p className="paragraph d-none d-sm-block  ">
          Indulge in a feast of savory delights from our menu: juicy burgers,
          crispy fries, cheesy pizzas <br /> and zesty tacos.Treat yourself to
          our delectable selection, from classic favorites to mouthwatering
          specialties.
        </p>
        <div className="view-menu">
          <button type="button" className="btn-primary ">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
