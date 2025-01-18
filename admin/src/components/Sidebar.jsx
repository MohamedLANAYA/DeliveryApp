import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div
      className="w-[15%] min-h-screen border-2 border-gray-400 border-t-0 "
      style={{ maz: "(1vw,10px)" }}
    >
      <div className=" pt-[50px]  pl-[20%] flex flex-col gap-5 ">
        <NavLink
          to="/add"
          className=" sidebar-option flex items-center gap-3 border   border-gray-400 border-r-0 p-[8px_10px] rounded-[3px_0px_0px_3px] cursor-pointer"
        >
          <img src={assets.add_icon} alt="" />
          <p className=" text-black">Add Items</p>
        </NavLink>

        <NavLink
          to="/list"
          className=" sidebar-option flex items-center gap-3 border  border-gray-400 border-r-0 p-[8px_10px]
        rounded-[3px_0px_0px_3px] cursor-pointer"
        >
          <img src={assets.order_icon} alt="" />
          <p className=" text-black">List Item</p>
        </NavLink>
        
        <NavLink
          to="/order"
          className=" sidebar-option flex items-center gap-3 border border-r-0 border-gray-400 p-[8px_10px]
        rounded-[3px_0px_0px_3px] cursor-pointer"
        >
          <img src={assets.order_icon} alt="" />
          <p className=" text-black">order</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
