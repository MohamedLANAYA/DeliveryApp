import { createContext, useState, useEffect } from "react";
import axios from "axios";
// import { food_list } from "../../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);

  /// all item  fetched from data  base
  const fetchFoodList = async () => {
    try {
      const response = await axios.get(url + "/api/food/list");
      setFoodList(response.data.data);
    } catch (error) {
      console.error("Error fetching foods:", error);
    }
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadFoodData(localStorage.getItem("token"))
      }
    }
    loadData();
  }, []);

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((pre) => ({ ...pre, [itemId]: 1 }));
    } else {
      setCartItems((pre) => ({ ...pre, [itemId]: pre[itemId] + 1 }));
    }
    // baackend intergrated items
    if(token){
      await axios.post(url + "/api/cart/add", { itemId},{headers:{token}});
    }
    

  };
  /// data remove from cart
  const removeFromCart = async (itemId) => {
    setCartItems((pre) => ({ ...pre, [itemId]: pre[itemId] - 1 }));
    // backend integration
    if(token){
      await axios.post(url + "/api/cart/remove", { itemId},{headers:{token}});
    }
  };


  const loadFoodData=async (token) => {
    try {
      const response = await axios.post(url + "/api/cart/get",{},{headers:{token}});
      setCartItems(response.data.cartData);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  }

  // const addToCart=(item,quantity)=>{
  //     setCartItems({...cartItems,[item.id]:{...cartItems[item.id],quantity:cartItems[item.id]?.quantity+quantity||quantity}});
  // }

  const getTotoalFromCart = () => {
    let totlaAmount = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totlaAmount += itemInfo.price * cartItems[item];
      }
    }
    return totlaAmount;
  };

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    setCartItems,
    getTotoalFromCart,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
