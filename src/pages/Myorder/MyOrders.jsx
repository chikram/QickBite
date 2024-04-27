import React, { useContext, useEffect, useState } from "react";
import "./MyOrders.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import assets from "../../assets/parcel_icon.png";
function MyOrders() {
  const { token, url } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);
  return (
    <div className="container custom-container">
      <h4 className="fw-bold">My Orders</h4>
      {data.map((order, index) => {
        return (
          <table key={index} className="table order-table">
            <tbody>
              <tr className="border border-dark row">
                <td className="col-sm-12 col-md-6 col-lg-6 col-xl-6 border border-0 col-xs-12">
                  <td style={{ width: "100px" }}>
                    {" "}
                    <img src={assets} alt="delivery" />
                  </td>
                  <td className="" style={{ width: "400px" }}>
                    {" "}
                    {order.items.map((item, index) => {
                      if (index === order.items.length - 1) {
                        return item.name + " x " + item.quantity;
                      } else {
                        return item.name + " x " + item.quantity + " ,";
                      }
                    })}
                  </td>
                </td>
                <td className=" col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xs-12 border border-0">
                  <td style={{ width: "100px" }}> ${order.amount}.00</td>
                  <td style={{ width: "100px" }}> Items{order.items.length}</td>
                  <td style={{ width: "150px" }}>
                    <span className="text-danger">&#x25cf;</span>
                    {order.status}
                  </td>
                  <td>
                    <button className="btn btn-order">Track</button>
                  </td>
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}

export default MyOrders;
