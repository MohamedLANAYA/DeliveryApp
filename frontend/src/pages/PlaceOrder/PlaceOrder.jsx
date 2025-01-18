import React, { useContext, useState,useEffect } from "react";
import { StoreContext } from "../../components/Context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getTotoalFromCart, token, food_list, cartItems, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    // payment_method: "",
    phone: "",
    // cart_items: cartItems,
    // total_amount: getTotoalFromCart()
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeorder=async (e)=>{
   e.preventDefault();
   let orderItems=[];
   food_list.map((item)=>{
    if(cartItems[item._id]>0){
      let itemInfo=item;
      itemInfo["quantity"]=cartItems[item._id];
      orderItems.push(itemInfo);
    }
   })
   console.log(orderItems)
    let orderData={
      address:data,
      items:orderItems,
      amount:getTotoalFromCart()+50,
    }
    let response=await axios.post(url+"/api/order/place",orderData,{headers:{token}});
    if(response.data.success){
      const {session_url}=response.data
      window.location.replace(session_url)
    }
    else{
      alert("Failed to place order");
    }

  }


const navigate=useNavigate();
  useEffect(()=>{
    if(!token){
      navigate('/cart')
    }else if(getTotoalFromCart()===0){
      navigate('/cart')
    }
  },[token])

  return (
    <form
      onSubmit={placeorder}
      className=" flex items-start justify-between gap-[50px] mt-20 "
    >
      {/* left side */}
      <div className="w-full" style={{ maxWidth: "max(30%,500px)" }}>
        <p className="text-[30px] font-semibold mb-[50px]">
          Delivery Information
        </p>
        <div className=" flex gap-[10px]">
          <input
            onChange={handleSubmit}
            className=" mb-[15px] w-full p-[10px] border-2 border-hrWhite rounded-md outline-red-500"
            type="text"
            placeholder="First name"
            name="firstname"
            value={data.firstname}
            required
          />
          <input
            onChange={handleSubmit}
            className=" mb-[15px] w-full p-[10px] border-2 border-hrWhite rounded-md outline-red-500"
            type="text"
            placeholder="Last name"
            name="lastname"
            value={data.lastname}
            required
          />
        </div>
        <input
          onChange={handleSubmit}
          className=" mb-[15px] w-full p-[10px] border-2 border-hrWhite rounded-md outline-red-500"
          type="email"
          placeholder="Email address"
          name="email"
          value={data.email}
          required
        />
        <input
          onChange={handleSubmit}
          type="text"
          placeholder="Street"
          className=" mb-[15px] w-full p-[10px] border-2 border-hrWhite rounded-md outline-red-500"
          name="street"
          value={data.street}
          required
        />
        <div className=" flex gap-[10px]">
          <input
            onChange={handleSubmit}
            className=" mb-[15px] w-full p-[10px] border-2 border-hrWhite rounded-md outline-red-500"
            type="text"
            placeholder="City"
            name="city"
            value={data.city}
            required
          />
          <input
            onChange={handleSubmit}
            className=" mb-[15px] w-full p-[10px] border-2 border-hrWhite rounded-md outline-red-500"
            type="text"
            placeholder="State"
            name="state"
            value={data.state}
            required
          />
        </div>
        <div className=" flex gap-[10px]">
          <input
            onChange={handleSubmit}
            className=" mb-[15px] w-full p-[10px] border-2 border-hrWhite rounded-md outline-red-500"
            type="text"
            placeholder="Zip code"
            name="zipcode"
            value={data.zipcode}
            required
          />
          <input
            onChange={handleSubmit}
            className=" mb-[15px] w-full p-[10px] border-2 border-hrWhite rounded-md outline-red-500"
            type="text"
            placeholder="Country"
            name="country"
            value={data.country}
            required
          />
        </div>
        <input
          onChange={handleSubmit}
          className=" mb-[15px] w-full p-[10px] border-2 border-hrWhite rounded-md outline-red-500"
          type="text"
          placeholder="phone"
          name="phone"
          value={data.phone}
          required
        />
      </div>
      {/* right side  */}
      <div className="w-full " style={{ maxWidth: "(40%,500px)" }}>
        <div className=" flex-1 flex flex-col gap-5">
          <h2 className="font-semibold text-[30px]">Cart Totals</h2>
          <div>
            <div className=" flex justify-between text-gray-500">
              <p>Subtotal</p>
              <p>₹{getTotoalFromCart()}</p>
            </div>
            <hr className=" m-[10px_0px]" />
            <div className=" flex justify-between text-gray-500">
              <p>Delivery Fee</p>
              <p>₹{getTotoalFromCart() === 0 ? 0 : 50}</p>
            </div>
            <hr className=" m-[10px_0px]" />
            <div className=" flex justify-between text-gray-500">
              <p>Total</p>
              <p>₹{getTotoalFromCart() === 0 ? 0 : getTotoalFromCart() + 50}</p>
            </div>
          </div>
          <button
            className=" border-none text-white bg-[#FDBB1E] p-[12px_0px] rounded-md
          cursor-pointer mt-8 "
            style={{ width: "max(15vw,200px)" }}
            type="submit"
          >
            PROCED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
