import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menu_list } from "../assets/assets";

const Categories = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <div
        className="gap-[300px] row flex pt-[45px] relative"
        id="explore-menu"
      >
        <div className="text-[32px] font-bold leading-[66px] text-slate-950 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          Poutinar’ Popular Categories 🤩
        </div>
      </div>

      <div className=" explore  flex justify-between items-center gap-[30px] my-5 mx-0 overflow-x-scroll">
        {menu_list.map((item, index) => {
          return (
            <div key={index} c lassName=" flex flex-col items-center 
            "
            onClick={() => setCategory( pre=> pre===item.menu_name?"All":item.menu_name)}
             
            >
              <img
                className={`w-[7.5vw] min-w-[80px] transition duration-200 cursor-pointer rounded-full
                  ${category===item.menu_name ? ' border-4 rounded-full border-red-400 p-[2px] ':''}
                  `}
                src={item.menu_image}
                alt="not"
               
              />
              <p 
                className=" mt-2 text-DimGray cursor-pointer "
                style={{ fontSize: "max(1.4vw,17px)" }}
              >
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
