import React from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="h-screen relative w-full">
      <div class="h-[400px]  bg-[#4A81D3] w-full"></div>
      <div className="w-3/4  bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md rounded-md ">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
