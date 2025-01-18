import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center p-[8px_4%]">
      <img
      style={{max:"(10%,80px)"}} 
       src={assets.logo} alt="" />
      
    </div>
  );
};

export default Navbar;
