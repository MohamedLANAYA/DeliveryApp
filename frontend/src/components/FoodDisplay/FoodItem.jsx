import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../Context/StoreContext";

const FoodItem = ({ id, name, price, des, img }) => {
  // const [itemCount, setItemCount] = useState(0);
  const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);
  return (
    <div className="w-full m-auto rounded-2xl  shadow-dark-blur transition duration-300 animate-fade-in ">
      <div className=" relative">
        <img className="w-full rounded-t-lg" src={url+"/images/"+img} />
        {!cartItems[id] ? (
          <img
            className=" w-7 absolute bottom-3 right-4 cursor-pointer rounded-full "
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div
            className=" absolute  flex items-center bottom-3 right-3 gap-[10px]
           p-[6px] rounded-full bg-white "
          >
            <img
              className="w-7 cursor-pointer"
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
            />
            <p>{cartItems[id]}</p>
            <img
              className="w-7 cursor-pointer"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>

  {/* use normal useState and it is diffecult to manage  */}
      {/* <div className=" relative">
        <img className="w-full rounded-t-lg" src={img} />
        {!itemCount ? (
          <img
            className=" w-7 absolute bottom-3 right-4 cursor-pointer rounded-full "
            onClick={() => setItemCount((pre) => pre + 1)}
            src={assets.add_icon_white}
          />
        ) : (
          <div
            className=" absolute  flex items-center bottom-3 right-3 gap-[10px]
           p-[6px] rounded-full bg-white "
          >
            <img
              className="w-7 cursor-pointer"
              onClick={() => setItemCount((pre) => pre - 1)}
              src={assets.remove_icon_red}
            />
            <p>{itemCount}</p>
            <img
              className="w-7 cursor-pointer"
              onClick={() => setItemCount((pre) => pre + 1)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div> */}  
      <div className=" p-5">
        <div className=" flex justify-between mb-5  items-center ">
          <p className=" text-xl font-semibold">{name}</p>
          <img className="w-[70px]" src={assets.rating_starts} alt="" />
        </div>
        <p className=" text-DimGray text-sm">{des}</p>
        <p className=" text-red-500 text-lg font-semibold my-[10px] mx-auto">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
