import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../components/Context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrder = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
    // console.log(response.data.data);
  };
  useEffect(() => {
    if (token) {
      fetchOrder();
    }
  }, [token]);

  return (
    <div className="m-[50px_0px]">
      <h2>My Orders</h2>
      <div className=" flex flex-col gap-5 mt-7 ">
        {data.map((order, index) => {
          return (
            <div key={index} className=" grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr]  items-center gap-7 p-[10px_20px] text-gray-600 border border-orange-400 border-solid rounded-sm  my-order"   >
              <img 
               width={50}
              src={assets.parcel_icon} />
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + "X" + item.quantity;
                  } else {
                    return item.name + "X" + item.quantity + ", ";
                  }
                })}
              </p>
              <p>${order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p>
                <span className="text-orange-500">&#x25cf;</span>
                <b
                className="font-semibold text-gray-500"
                >{order.status}</b>
              </p>
              <button
              onClick={fetchOrder}
              className=" border-none p-[12px_0] rounded-md bg-Fwhite cursor-pointer text-gray-400"
              >Track Order</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
