import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="mt-7">
      <h2 className="  font-semibold" style={{ fontSize: "max(2vw,24px)" }}>
        Top dishes near you
      </h2>
      <div className=" grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-7 mt-7  row-gap gap-y-12">
        {food_list.map((food, index) => {
          if (category === "All" || category ===food.category) {
            return (
              <FoodItem
                id={food._id}
                name={food.name}
                des={food.description}
                img={food.image}
                price={food.price}
                key={index}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
