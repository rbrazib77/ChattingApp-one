import React from "react";
import { UserIcon } from "../../svg/Users";
import { useLocation, useNavigate } from "react-router-dom";

const Userlists = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="bg-[#FBFBFB] ">
      <h1 className="font-robotoMedium text-base text-black pt-6 px-6">
        {
          location.pathname == "/" ?" All User":"Friends"
        }
      </h1>
      <div className="px-6  h-[720px] overflow-y-auto  ">
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-x-3">
            <div className="h-11 w-11 bg-slate-400 rounded-full "></div>
            <h2 className="font-poppinsRegular text-black text-sm">
              Razib Hossain
            </h2>
          </div>
          {location.pathname == "/" && (
            <div className="text-[#292D32] text-lg cursor-pointer">
              <UserIcon />
            </div>
          )}
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-x-3">
            <div className="h-11 w-11 bg-slate-400 rounded-full "></div>
            <h2 className="font-poppinsRegular text-black text-sm">
              Razib Hossain
            </h2>
          </div>
          {location.pathname == "/" && (
            <div className="text-[#292D32] text-lg cursor-pointer">
              <UserIcon />
            </div>
          )}
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-x-3">
            <div className="h-11 w-11 bg-slate-400 rounded-full "></div>
            <h2 className="font-poppinsRegular text-black text-sm">
              Razib Hossain
            </h2>
          </div>
          {location.pathname == "/" && (
            <div className="text-[#292D32] text-lg cursor-pointer">
              <UserIcon />
            </div>
          )}
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-x-3">
            <div className="h-11 w-11 bg-slate-400 rounded-full "></div>
            <h2 className="font-poppinsRegular text-black text-sm">
              Razib Hossain
            </h2>
          </div>
          {location.pathname == "/" && (
            <div className="text-[#292D32] text-lg cursor-pointer">
              <UserIcon />
            </div>
          )}
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-x-3">
            <div className="h-11 w-11 bg-slate-400 rounded-full "></div>
            <h2 className="font-poppinsRegular text-black text-sm">
              Razib Hossain
            </h2>
          </div>
          {location.pathname == "/" && (
            <div className="text-[#292D32] text-lg cursor-pointer">
              <UserIcon />
            </div>
          )}
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-x-3">
            <div className="h-11 w-11 bg-slate-400 rounded-full "></div>
            <h2 className="font-poppinsRegular text-black text-sm">
              Razib Hossain
            </h2>
          </div>
          {location.pathname == "/" && (
            <div className="text-[#292D32] text-lg cursor-pointer">
              <UserIcon />
            </div>
          )}
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-x-3">
            <div className="h-11 w-11 bg-slate-400 rounded-full "></div>
            <h2 className="font-poppinsRegular text-black text-sm">
              Razib Hossain
            </h2>
          </div>
          {location.pathname == "/" && (
            <div className="text-[#292D32] text-lg cursor-pointer">
              <UserIcon />
            </div>
          )}
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-x-3">
            <div className="h-11 w-11 bg-slate-400 rounded-full "></div>
            <h2 className="font-poppinsRegular text-black text-sm">
              Razib Hossain
            </h2>
          </div>
          {location.pathname == "/" && (
            <div className="text-[#292D32] text-lg cursor-pointer">
              <UserIcon />
            </div>
          )}
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-x-3">
            <div className="h-11 w-11 bg-slate-400 rounded-full "></div>
            <h2 className="font-poppinsRegular text-black text-sm">
              Razib Hossain
            </h2>
          </div>
          {location.pathname == "/" && (
            <div className="text-[#292D32] text-lg cursor-pointer">
              <UserIcon />
            </div>
          )}
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-x-3">
            <div className="h-11 w-11 bg-slate-400 rounded-full "></div>
            <h2 className="font-poppinsRegular text-black text-sm">
              Razib Hossain
            </h2>
          </div>
          {location.pathname == "/" && (
            <div className="text-[#292D32] text-lg cursor-pointer">
              <UserIcon />
            </div>
          )}
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center gap-x-3">
            <div className="h-11 w-11 bg-slate-400 rounded-full "></div>
            <h2 className="font-poppinsRegular text-black text-sm">
              Razib Hossain
            </h2>
          </div>
          {location.pathname == "/" && (
            <div className="text-[#292D32] text-lg cursor-pointer">
              <UserIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Userlists;
