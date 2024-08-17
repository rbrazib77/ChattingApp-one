import React, { useState } from "react";
import { FriendsIcon } from "../../svg/Friends";
import { MessageIcon } from "../../svg/Message";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LogoutIcon } from "../../svg/Logout";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { LogeOutUser } from "../../features/Slices/LoginSlice";
import { CameraIcon } from "../../svg/Camera";
import { createPortal } from "react-dom";
import AvatarImage from "../../assets/avatar.jpg"
import Modal from "../Modal";
const Navbar = () => {
  const user = useSelector((user) => user.login.loggedIn);
  const [show, setShow] = useState(false);
  const auth = getAuth();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        localStorage.removeItem("user");
        dispatch(LogeOutUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="flex items-center justify-between px-36 bg-[#232323] py-3">
        <div className="flex items-center gap-x-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full  overflow-hidden">
              <img src={user.photoURL || AvatarImage } alt="" className="w-full h-full" />
            </div>
            <div
              className="text-[#292D32] absolute bottom-0 right-0 w-7 h-7 rounded-full flex items-center justify-center bg-white cursor-pointer"
              onClick={() => setShow(true)}>
              <CameraIcon />
            </div>
          </div>
          <div>
            <h2 className="font-robotoRegular text-white">Razib Hossain</h2>
          </div>
        </div>
        <div className="flex items-center gap-x-5">
          <Link
            to="/"
            className={`${
              location.pathname == "/"
                ? "text-white bg-[#6CD0FB]"
                : "text-[#292D32] bg-white"
            } w-10 h-10 rounded-full   flex items-center justify-center`}>
            <FriendsIcon />
          </Link>
          <Link
            to="/message"
            className={`${
              location.pathname == "/message"
                ? "text-white bg-[#6CD0FB]"
                : "text-[#292D32] bg-white"
            } w-10 h-10 rounded-full flex items-center justify-center`}>
            <MessageIcon />
          </Link>
        </div>
        <div
          onClick={handleLogout}
          className="text-white flex items-center gap-x-1 cursor-pointer ">
          <LogoutIcon />
          <span className="text-base font-poppinsRegular">Logout</span>
        </div>
      </div>
      {show && createPortal(
       <Modal setShow={setShow} />,
        document.body
      )}
    </>
  );
};

export default Navbar;
