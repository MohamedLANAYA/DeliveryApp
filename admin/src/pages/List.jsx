import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({url}) => {
  const [list, setList] = useState([]);
  
  const fetchData = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    // console.log(response.data);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeFoode = async (id) => {
    //  console.log(id)
    const response = await axios.post(`${url}/api/food/remove`, { id: id });
    // console.log(response.data);
    await fetchData();
    if (response.data.success) {
      toast.success("Food removed successfully");
      // fetchData();
    } else {
      toast.error("Failed to remove food");
    }
  };

  return (
    <div className=" w-[70%] ml-[max(5vw,25px)] mt-50px text-gray-400 text-[16px] ">
      <div>
        <p>All Food List</p>
        <div>
          <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-2 p-[12px_15px] border border-gray-300 text-[13px] list-table-formate title">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
          </div>
          {list.map((item, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[10px] p-[12px_15px] border border-gray-300 text-[13px] w-full h-full list-table-formate"
              >
                <img
                 className=" rounded-sm"
                  src={`${url}/images/` + item.image}
                  alt={item.name}
                  width={50}
                />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>${item.price}</p>
                <p
                  className=" cursor-pointer"
                  onClick={() => removeFoode(item._id)}
                >
                  X
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default List;
