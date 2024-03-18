import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <div className="container-fluid position-relative">
      <img
        src="header_img.png"
        alt="header"
        width={"100%"}
        className="img-fluid"
      />
      <div className="translate-middle-y position-absolute top-50 start-30 text-white">
        <h1 className="fw-bold  fav-food">
          Order Your <br className=" d-none d-sm-block " /> Favourite Food here
        </h1>
        <p className="paragraph ">
          Indulge in a feast of savory delights from our menu: juicy burgers,
          crispy fries, cheesy pizzas <br className=" d-none d-sm-block " /> and
          zesty tacos.Treat yourself to our delectable selection, from classic
          favorites to mouthwatering specialties.
        </p>
        <span type="button" className="btn view-menu  text-primary">
          View Menu
        </span>
      </div>
    </div>
  );
};

export default Header;
