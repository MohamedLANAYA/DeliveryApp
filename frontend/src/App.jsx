import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Login from "./components/LoginPop/Login";
import Verify from "./pages/Verify/Verify"
import PromoHeader from './components/PromoHeader'
import MyOrders from "./pages/myOrders/MyOrders";
import CartIndicator from "./components/CartIndicator";


function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      {isLogin ? <Login setIsLogin={setIsLogin} /> : <></>}
      <div className=" w-[80%] mx-auto">
      <CartIndicator />
      <PromoHeader/>
        <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify/>}/>
          <Route path="/myorders" element={<MyOrders/>}/>
        </Routes>
      </div> 
      <Footer />
    </>
  );
}

export default App;
