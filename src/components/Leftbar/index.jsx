import React,{useEffect, useState} from "react";
import userImg from "../../assets/images/bg.jpg";
import { IoHomeOutline } from "react-icons/io5";
import { RiMessage2Line } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { getAuth, signOut ,onAuthStateChanged} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Leftbar = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [fullName,setFullName]=useState()
  const handleSignoute = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        console.log("dfdfd")
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setFullName(user.displayName);
      } 
    });
  }, []);
  return (
    <div className="bg-primary h-screen  mt-4 ml-4 mb-4 rounded-[35px] leftbar ">
      <picture>
        <img
          src={userImg}
          alt="Img Not"
          className="w-[100px] h-[100px] rounded-full m-auto mt-7"
        />
      </picture>
      <h1 className="font-robotoMedium text-center text-3xl text-white pt-3">
        {fullName}
      </h1>
      <ul>
        <li className={props.active == "home" && "active"}>
          <IoHomeOutline className="text-center m-auto  text-5xl text-[#BAD1FF] ml-[150px] cursor-pointer " />
        </li>
        <li className={props.active == "msg" && "active"}>
          <RiMessage2Line className="text-center m-auto text-5xl text-[#BAD1FF] ml-[150px] cursor-pointer " />
        </li>
        <li className={props.active == "notificatin" && "active"}>
          <IoMdNotificationsOutline className="text-center m-auto text-5xl text-[#BAD1FF] ml-[150px] cursor-pointer " />
        </li>
        <li className={props.active == "setting" && "active"}>
          <IoSettingsSharp className="text-center m-auto text-5xl text-[#BAD1FF] ml-[150px] cursor-pointer " />
        </li>
        <li onClick={handleSignoute}>
          <FiLogOut className="text-center m-auto text-5xl text-[#BAD1FF] ml-[150px] cursor-pointer " />
        </li>
      </ul>
    </div>
  );
};

export default Leftbar;
