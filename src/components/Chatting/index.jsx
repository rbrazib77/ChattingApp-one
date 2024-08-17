import React from "react";
import { EmojiIcon } from "../../svg/Emoji";
import { GalleryIcon } from "../../svg/Gallery";

const Chatting = () => {
  return (
    <>
      <div className="bg-white">
        <div className="bg-[#232323] mt-3">
          <div className="flex items-center gap-x-4 pl-10 py-3">
            <div className="w-14 h-14 rounded-full bg-orange-400 overflow-hidden"></div>
            <h2 className="font-robotoRegular text-white">Razib Hossain</h2>
          </div>
        </div>
        <div className="bg-white h-[500px]"></div>
        <div className="bg-[#F5F5F5F5] py-10 flex justify-center ">
          <div className="w-[556px] bg-white flex items-center justify-center rounded-md gap-x-6 px-4">
            <div className="flex gap-x-3 cursor-pointer">
                <EmojiIcon/>
                <GalleryIcon/>
            </div>
            <input
              type="text"
              placeholder="type something"
              className="bg-white py-6 w-2/3  outline-none "
            />
            <button className="px-7 py-2 bg-[#4A81D3] rounded-md text-white font-poppinsRegular">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatting;
