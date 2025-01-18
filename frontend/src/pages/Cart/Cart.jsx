import React, { useContext, useEffect } from "react";
import { StoreContext } from "../../components/Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, food_list,getTotoalFromCart,url } = useContext(StoreContext);
  const navigate=useNavigate();

  // useEffect(()=>{
  //   console.log(getTotoalFromCart())
  // })
  return (
    <div className=" mt-20">
      <div>
        <div
          className=" grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500"
          style={{ fontSize: "max(1vw,12px)" }}
        >
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div
                  className=" grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center
                 m-[10px_0px] text-black
                "
                  style={{ fontSize: "max(1vw,12px)" }}
                >
                  <img width={50} src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p> ${item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className="cursor-pointer"
                  >
                    X
                  </p>
                </div>
                <hr className=" h-[1px] text-hrWhite" />
              </div>
            );
          }
        })}
      </div>

      <div className=" flex mt-20 justify-between  cart-bottom" style={{gap:'max(14vw,20px)'}}>
        <div className=" flex-1 flex flex-col gap-5">
          <h2>Cart Totals</h2>
          <div>
            <div   className=" flex justify-between text-gray-500" >
              <p>Subtotal</p>
              <p>${getTotoalFromCart()}</p>
            </div>
            <hr className=" m-[10px_0px]" />
            <div className=" flex justify-between text-gray-500">
              <p>Delivery Fee</p>
              <p>${getTotoalFromCart()===0?0:50}</p>
            </div>
            <hr  className=" m-[10px_0px]" />
            <div className=" flex justify-between text-gray-500">
              <p>Total</p>
              <p>${getTotoalFromCart()===0?0:getTotoalFromCart()+50}</p>
            </div>
          </div>
          <button
          onClick={()=> navigate('/order')}
          className=" border-none text-white bg-[#FDBB1E] p-[12px_0px] rounded-md
          cursor-pointer "
          style={{width:"max(15vw,200px)"}}
          >Checkout</button>
        </div>

        <div className=" flex-1 cart-promo ">
          <div>
            <p
             className="text-gray-500"
            >If you have promeo code,Enter it here</p>
            <div className="mt-[10px] flex justify-between items-center bg-Iwhite rounded-md">
              <input
              className=" bg-transparent border-none outline-none pl-[10px]"
              type="text" placeholder="Enter Promo Code" />
              <button
              className=" p-[12px_5px] bg-black border-none text-white rounded-r-md" style={{width:"max(10vw,150px)"}}
              >Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
