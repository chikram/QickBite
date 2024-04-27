import axios from "axios";
import { StoreContext } from "../../context/StoreContext";
import "./PlaceOrder.css";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onchangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token]);

  return (
    <>
      <form onSubmit={placeOrder}>
        <div className="row place-order">
          <div className=" col-xs-12 mb-3 col-sm-6 col-lg-6 col-md-6">
            <h4>Delivery Information</h4>

            <div className="mb-3 d-flex">
              <input
                name="firstName"
                onChange={onchangeHandler}
                value={data.firstName}
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="First name"
                required
              />
              <input
                name="lastName"
                onChange={onchangeHandler}
                value={data.lastName}
                type="text"
                className="form-control ms-2"
                aria-describedby="emailHelp"
                placeholder="First name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                name="email"
                onChange={onchangeHandler}
                value={data.email}
                className="form-control"
                type="text"
                placeholder="Email Adress"
                aria-label="default input example"
                required
              />
            </div>
            <div className="mb-3">
              <input
                name="street"
                onChange={onchangeHandler}
                value={data.street}
                className="form-control"
                type="text"
                placeholder="Street"
                aria-label="default input example"
                required
              />
            </div>
            <div className="mb-3 d-flex">
              <input
                name="city"
                onChange={onchangeHandler}
                value={data.city}
                type="text"
                className="form-control"
                aria-label="default input example"
                placeholder="City"
                required
              />
              <input
                name="state"
                onChange={onchangeHandler}
                value={data.state}
                type="text"
                className="form-control ms-2"
                aria-label="default input example"
                placeholder="State"
                required
              />
            </div>
            <div className="mb-3 d-flex">
              <input
                name="country"
                onChange={onchangeHandler}
                value={data.country}
                type="text"
                className="form-control"
                aria-label="default input example"
                placeholder="Country"
                required
              />
              <input
                name="zipcode"
                onChange={onchangeHandler}
                value={data.zipcode}
                type="text"
                className="form-control ms-2"
                aria-label="default input example"
                placeholder="Zip Code"
                required
              />
            </div>
            <div className="mb-3">
              <input
                name="phone"
                onChange={onchangeHandler}
                value={data.phone}
                className="form-control"
                type="text"
                placeholder="Phone"
                aria-label="default input example"
                required
              />
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-md-4 w-40 my-2 col-xm-6">
            <h4>Cart Totals</h4>
            <div className="card mb-5">
              <div className="card-body">
                <div className="d-flex border-bottom">
                  <p className="card-text ">Subtotals</p>
                  <p style={{ paddingLeft: "6%" }}> ${getTotalCartAmount()}</p>
                </div>
                <div className="d-flex border-bottom">
                  <p className="card-text">Delivery Fee</p>
                  <p style={{ paddingLeft: "2%" }}>
                    ${getTotalCartAmount() === 0 ? 0 : 5}
                  </p>
                </div>
                <div className="d-flex  border-bottom">
                  <p className="card-text fw-bold">Total</p>
                  <p style={{ paddingLeft: "10%" }}>
                    $ $
                    {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}
                  </p>
                </div>
                <button type="submit" className="btn btn-danger my-2 btn-total">
                  PROCEED TO PAYMENT
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default PlaceOrder;
