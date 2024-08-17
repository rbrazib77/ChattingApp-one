import React from "react";
import Lottie from "lottie-react";
import loginAnimation from "../animations/loginAnimation.json";
import { ToastContainer, toast } from "react-toastify";
import LoginFromCom from "../components/Login";
const Login = () => {
  return (
    <>
      <ToastContainer />
      <div className="w-full h-screen rounded-md  flex items-center justify-center">
        <div className="sm:w-2/3 sm:flex sm:justify-center items-center  shadow-md ">
          <div className="sm:w-[50%]">
            <Lottie animationData={loginAnimation} loop={false} />
          </div>
          <div className="sm:w-[50%] px-3 md:px-0">
            <LoginFromCom toast={toast} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
