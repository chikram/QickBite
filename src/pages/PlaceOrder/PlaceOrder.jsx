import { StoreContext } from "../../context/StoreContext";
import "./PlaceOrder.css";
import React, { useContext } from "react";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <>
      <div className="row place-order">
        <div className="col mb-3">
          <h4>Delivery Information</h4>
          <form>
            <div className="mb-3 d-flex">
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="emailHelp"
                placeholder="First name"
              />
              <input
                type="text"
                className="form-control ms-2"
                id="name"
                aria-describedby="emailHelp"
                placeholder="First name"
              />
            </div>
            <div className="mb-3">
              <input
                class="form-control"
                type="text"
                placeholder="Email Adress"
                aria-label="default input example"
              />
            </div>
            <div className="mb-3">
              <input
                class="form-control"
                type="text"
                placeholder="Street"
                aria-label="default input example"
              />
            </div>
            <div className="mb-3 d-flex">
              <input
                type="text"
                className="form-control"
                aria-label="default input example"
                placeholder="City"
              />
              <input
                type="text"
                className="form-control ms-2"
                aria-label="default input example"
                placeholder="State"
              />
            </div>
            <div className="mb-3 d-flex">
              <input
                type="text"
                className="form-control"
                aria-label="default input example"
                placeholder="Country"
              />
              <input
                type="text"
                className="form-control ms-2"
                id="Zip Code"
                aria-label="default input example"
                placeholder="Zip Code"
              />
            </div>
            <div className="mb-3">
              <input
                class="form-control"
                type="text"
                placeholder="Phone"
                aria-label="default input example"
              />
            </div>
          </form>
        </div>
        <div className="col-6 w-50 my-2">
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
                  $ ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}
                </p>
              </div>
              <button className="btn btn-danger my-2 btn-total">
                PROCEED TO PAYMENT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
