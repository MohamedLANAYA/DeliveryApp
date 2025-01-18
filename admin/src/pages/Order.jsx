import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
const Order = ({ url }) => {
  const [orders, setOrder] = useState([]);
  // console.log(order)

  const Allorder = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrder(response.data.data);
      // console.log(response.data.data);
    } else {
      toast.error("Error: ");
    }
  };

  useEffect(() => {
    Allorder();
  }, []);

  // backend intergration
  const handleChange = async (e, orderId) => {
    // console.log(e,order_id)
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: e.target.value,
    });
    if (response.data.success) {
      toast.success("Order status updated successfully");
      await Allorder();
    }
  };

  return (
    <div className=" w-[70%] ml-[max(5vw,25px)] mt-50px text-gray-400 text-[16px] ">
      <h3>Order Page</h3>
      <div>
        {orders.map((order, index) => (
          <div
            key={index}
            className=" grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr] items-start gap-7 border border-solid border-orange-200 rounded-md p-5 m-[30px_0px] text-[14px] text-gray-400 order-list"
          >
            <img src={assets.parcel_icon} />

            <div className=" font-semibold">
              <p className=" ">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " X " + item.quantity;
                  } else {
                    return item.name + " X " + item.quantity + ", ";
                  }
                })}
              </p>
              <p className=" mt-7 mb-1 font-semibold">
                {order.address.firstname + " " + order.address.lastname}
              </p>
              <div className=" mt-2">
                <p>{order.address.street + ","}</p>
                <p>
                  {order.address.city +
                    "," +
                    order.address.state +
                    "," +
                    order.address.country +
                    "," +
                    order.address.zipcode}
                </p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <p>Items: {order.items.length}</p>
            <p>₹{order.amount}</p>

            <select
              onChange={(e) => handleChange(e, order._id)}
              value={order.status}
              className=" bg-[#ffe8e4] border border-blue-200 rounded-md   w-[max(10vw,120px)] outline-none p-1 order-list-select text-black"
            >
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
