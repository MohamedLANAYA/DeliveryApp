import React, { useState, useContext } from "react";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";
const Navbar = ({ isLogin, setIsLogin }) => {
  const { getTotoalFromCart, token, setToken } = useContext(StoreContext);
  const [activeItem, setActiveItem] = useState("Home");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Browse Menu", link: "#explore-menu" },
    { name: "Special Offers", link: "/" },
    { name: "Restaurants", link: "/" },
    { name: "Track Order", link: "/" },
  ];
  return (
    <div className="py-5 row px-0 flex justify-between mb-6 items-center navbar">
      {/* Logo */}
      <Link to="/">
        <img
          className="logo w-[150px]"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/af9abbe6d5da44e482133b29e2dda4d614215f1462e1c533eda5b82ddca29209?placeholderIfAbsent=true&apiKey=376ca8dd2e4d4c5c9a7442cd549d15f1"
          alt="Company Logo"
        />
      </Link>
      <ul className="navbar-menu flex gap-5">
        {navItems.map((item, index) => (
          <li key={index}>
            {item.link.startsWith("#") ? (
              // For hash-based navigation
              <a
                href={item.link}
                onClick={() => setActiveItem(item.name)}
                className={`font-medium text-sm px-4 py-2 rounded-full transition-colors ${
                  activeItem === item.name
                    ? "bg-[#FDBB1E] text-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                {item.name}
              </a>
            ) : (
              // For router navigation
              <Link
                to={item.link}
                onClick={() => setActiveItem(item.name)}
                className={`font-medium text-sm px-4 py-2 rounded-full transition-colors ${
                  activeItem === item.name
                    ? "bg-[#FDBB1E] text-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <div className=" flex  items-center gap-10  navbar-right">
        
        

        {!token ? (
          <button
            className=" flex items-center gap-2 px-6 py-2 font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors"
            aria-label="Login or Signup"
            onClick={() => setIsLogin(true)}
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/17d067186d7d1780fedbbb1e64dc08ade5d482ba831e8fc6e12883ef78a7a49f?placeholderIfAbsent=true&apiKey=376ca8dd2e4d4c5c9a7442cd549d15f1"
              alt="User Icon"
              className="h-6 w-6 object-contain rounded-sm"
              aria-hidden="true"
            />
            <span>Login/Signup</span>
           
          </button>
        ) : (
          <div className=" relative navbar-profile cursor-pointer">
            <img src={assets.profile_icon} />
            <ul className=" absolute right-0 z-10 hidden navbar-droup">
              <li
                onClick={() => navigate("/myorders")}
                className="flex items-center gap-[10px] cursor-pointer hover:text-red-400"
              >
                <img width={20} src={assets.bag_icon} />
                <p>Orders</p>
              </li>
              <hr />
              <li
                onClick={handleLogout}
                className="flex items-center gap-[10px] cursor-pointer hover:text-red-400"
              >
                <img width={20} src={assets.logout_icon} />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
        {/* <button
          className=" bg-transparent text-[16px] text-bgWhite border border-orange-700 border-solid rounded-full  py-3 px-7 cursor-pointer lg:py-[8px] lg:px-[25px] lg2:py-[7px] lg2:px-4 lg2:text-[15px]  "
          onClick={() => setIsLogin(true)}
        >
          sign in
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;
