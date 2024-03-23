import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";
import React, { useContext } from "react";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  return (
    <>
      <table className="table mb-5 table-responsive">
        <thead>
          <tr>
            <th scope="col">Items</th>
            <th className="px-3" scope="col">
              Title
            </th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <tbody>
                <tr>
                  <td className="border-0">
                    <img src={item.image} alt="" width={50} />
                  </td>
                  <td className="border-0">{item.name}</td>
                  <td className="border-0"> ${item.price}</td>
                  <td className="px-4 border-0">{cartItems[item._id]}</td>
                  <td className="border-0">
                    ${item.price * cartItems[item._id]}
                  </td>
                  <td
                    onClick={() => removeFromCart(item._id)}
                    className="px-4 border-0 remove"
                  >
                    X
                  </td>
                </tr>
              </tbody>
            );
          }
        })}
      </table>
      <div className="row">
        <div className="col-6 w-50">
          <div className="card mb-5">
            <div className="card-body">
              <h5 className="card-title fw-bold">Cart Totals</h5>
              <div className="d-flex border-bottom">
                <p className="card-text ">Subtotals</p>
                <p style={{ paddingLeft: "6%" }}>$20</p>
              </div>
              <div className="d-flex border-bottom">
                <p className="card-text">Delivery Fee</p>
                <p style={{ paddingLeft: "2%" }}>$20</p>
              </div>
              <div className="d-flex  border-bottom">
                <p className="card-text fw-bold">Total</p>
                <p style={{ paddingLeft: "10%" }}>$20</p>
              </div>
              <a href="#" className="btn btn-danger my-2 btn-total">
                PROCEED TO CHECKOUT
              </a>
            </div>
          </div>
        </div>
        <div className=" h-50 border col-6">
          <p>Enter Promo Code</p>
          <div className="input-group mb-3">
            <input type="text" class="form-control" placeholder="Promo Code" />
          </div>
          <br />
          <button className="btn btn-dark mx-3 mb-2"> Submit</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
