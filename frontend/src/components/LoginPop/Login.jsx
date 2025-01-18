import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../Context/StoreContext";
import axios from "axios"
  
const Login = ({ setIsLogin }) => {
  const [currenrState, setCurrentState] = useState("Sign Up");
  const { url ,token,setToken } = useContext(StoreContext);
  // update and this more modify 

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  //  useEffect(()=>{
  //   console.log(data)
  //  },[data])

  const onLogin = async (e) => {
    e.preventDefault();
    let newrl = url;
    if (currenrState == "Login") {
      newrl += "/api/user/login";
    } else {
      newrl += "/api/user/register";
    }

    const response=await axios.post(newrl,data)
    if(response.data.success) {
      setToken(response.data.token)
      localStorage.setItem('token',response.data.token)
      setIsLogin(false)
    }else{
      alert("Invalid credentials")
    }
     
  };





  return (
    <div className=" absolute w-full h-full grid z-10 bg-PopBlack">
      <form
        onSubmit={onLogin}
        className=" place-self-center text-PopWhite bg-white flex flex-col gap-6 p-[25px_30px]
        rounded-2xl text-[14px] animate-fade-in duration-500"
        style={{ width: "max(23vw,330px)" }}
      > 

        <div className=" flex justify-between items-center text-black font-semibold ">
          <h2>{currenrState}</h2>
          <img
            className=" w-4 cursor-pointer"
            onClick={() => setIsLogin(false)}
            src={assets.cross_icon}
          />
        </div>
        <div className=" flex flex-col gap-5">
          {currenrState === "Login" ? (
            <></>
          ) : (
            <input
              onChange={handleChange}
              className=" outline-none border-2 border-PopWhite rounded-md p-[6px]"
              type="text"
              name="name"
              value={data.name}
              placeholder="Your Name"
              required
            />
          )}
          <input
            onChange={handleChange}
            className=" outline-none border-2 border-PopWhite rounded-md p-[6px]"
            type="email"
            name="email"
            value={data.email}
            placeholder="Your email"
            required
          />
          <input
            onChange={handleChange}
            className=" outline-none border-2 border-PopWhite rounded-md p-[6px]"
            type="password"
            name="password"
            value={data.password}
            placeholder="Password"
            required
          />
        </div>
        <button className=" border-none p-[8px] rounded-md text-white bg-red-500 text-[15px] cursor-pointer">
          {currenrState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className=" flex start gap-2 mt-[-15px]">
          <input
            className="mt-[-17px] cursor-pointer"
            type="checkbox"
            required
          />
          <p
          //  className=" text-[15px]"
          >
            By continuing, i agree to the terms of use & privacy policy.
          </p>
        </div>

        {currenrState === "Login" ? (
          <p>
            Create a new account?
            <span
              className=" cursor-pointer text-red-500 font-semibold"
              onClick={() => setCurrentState("Sign Up")}
            >
              {" "}
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span
              className=" cursor-pointer text-red-500 font-semibold"
              onClick={() => setCurrentState("Login")}
            >
              {" "}
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
