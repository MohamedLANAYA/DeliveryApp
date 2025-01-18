import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios"
import { toast } from "react-toastify";
const Add = ({url}) => {
    // const url="http://localhost:4000";
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    price: "",
    description: "",
    category: "Salad",
  });
  //  test successful
  //   useEffect(() => {
  //     console.log(data);
  //   }, [data]);
  const onChangeHandlers = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  //   Api Call From backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData=new FormData();
    formData.append('image',image);
    formData.append('name',data.name);
    formData.append('price',Number(data.price));
    formData.append('description',data.description);
    formData.append('category',data.category);
    const response=await axios.post(`${url}/api/food/add`,formData)
    if(response.data.success) {
        setData({
            name: "",
            price: "",
            description: "",
            category: "Salad",
          });
          setImage(false)  
          toast.success(response.data.message);  
    } 
    else {
        toast.error(response.data.message);
    }
  };
  return (
    <div className=" w-[70%] ml-[max(5vw,25px)] mt-50px text-gray-400 text-[16px]">
      <form onSubmit={handleSubmit} className="gap-5 flex flex-col ">
        <div className="flex flex-col gap-[10px]">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              className=" border-2 rounded-md cursor-pointer"
              width={120}
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            className=" border-2 rounded-md"
            type="file"
            name=""
            hidden
            required
            id="image"
          />
        </div>

        <div
          className="flex flex-col gap-[10px] 
        w-[max(40%,280px)] "
        >
          <p>Product name</p>
          <input
            onChange={onChangeHandlers}
            value={data.name}
            className="p-2 border-2 rounded-md"
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>

        <div
          className="flex flex-col gap-[10px] 
         w-[max(40%,280px)]"
        >
          <p>Product description</p>
          <textarea
            onChange={onChangeHandlers}
            className="p-2 border-2 rounded-md"
            name="description"
            rows="6"
            placeholder="write content here"
            value={data.description}
          ></textarea>
        </div>

        <div className=" flex gap-7">
          <div className="flex flex-col gap-[10px]">
            <p>Product categoy</p>
            <select
              onChange={onChangeHandlers}
              name="category"
              className="border-2 rounded-md max-w-28 p-2"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          <div className="flex flex-col gap-[10px]  ">
            <p>Product Price</p>
            <input
              onChange={onChangeHandlers}
              value={data.price}
              className=" border-2 rounded-md p-2 max-w-28"
              type="Number"
              name="price"
              placeholder="$100"
            />
          </div>
        </div>
        <button
          className=" max-w-28 border-none p-2 bg-[#FDBB1E] text-white cursor-pointer rounded-lg hover:shadow-lg transition-all duration-150"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
