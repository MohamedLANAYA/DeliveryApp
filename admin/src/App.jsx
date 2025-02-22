import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import Order from "./pages/Order";
import List from "./pages/List";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const url = "http://localhost:4000";
  return (
    
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add  url={url} />} />
          <Route path="/order" element={<Order url={url}/>}/>
          <Route path="/list" element={<List url={url} />}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
