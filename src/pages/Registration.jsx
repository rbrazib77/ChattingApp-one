import React from "react";
import RegFromCom from "../components/Registration";
import Lottie from "lottie-react";
import regAnimation from "../animations/registration.json";
import { ToastContainer, toast } from "react-toastify";
const Registration = () => {
  return (
    <>
      <ToastContainer />
      <div className="w-full h-screen rounded-md  flex items-center justify-center">
        <div className="sm:w-2/3 sm:flex justify-between items-center  shadow-md ">
          <div className="sm:w-[50%] mt-20 md:mt-0">
            <Lottie animationData={regAnimation} loop={false} />
          </div>
          <div className="sm:w-[50%] px-3 md:px-0">
            <RegFromCom toast={toast} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
