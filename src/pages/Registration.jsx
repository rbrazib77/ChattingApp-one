import React from "react";
import RegFromCom from "../components/Registration";
import registrationImg from "../assets/images/regis.webp";
const Registration = () => {
  return (
    <>
      <div className="w-full h-screen rounded-md  flex items-center justify-center">
        <div className="w-2/3 flex justify-between gap-x-3 shadow-md ">
          <div className="w-[50%]">
            <picture>
              <img src={registrationImg} className="h-full w-full" alt="" />
            </picture>
          </div>
          <div className="w-[50%]">
            <RegFromCom />
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
