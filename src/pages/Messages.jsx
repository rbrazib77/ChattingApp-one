import React from "react";
import Userlists from "../components/UserLists";
import Chatting from "../components/Chatting";

const Messages = () => {
  return (
    <>
      <div className="grid grid-cols-[2fr,4fr]">
        <div className="w-full  ">
          {/* Frinds List */}
          <Userlists />
        </div>
        <div className="mx-3 ">
          <Chatting />
        </div>
      </div>
    </>
  );
};

export default Messages;
