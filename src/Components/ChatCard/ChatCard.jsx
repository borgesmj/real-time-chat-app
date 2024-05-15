import React from "react";

const ChatCard = ({darkTheme}) => {
  return (
    <li
      className={`w-full h-[70px] ${
        !darkTheme ? "bg-[#f5f5f5]" : "bg-[#1b283f]"
      } flex flex-row items-center justify-start rounded-[5px] relative hover:cursor-pointer p-2 mr-4`}
    >
      <img
        src="https://thumbs.wbm.im/pw/medium/769696e34b3e45081d14212795d01414.avif"
        alt=""
        className="rounded-full h-[50px] w-[50px]"
      />
      <div className="ml-2 h-full flex flex-col justify-evenly w-4/5">
        <h3 className="font-bold">Roland Garros</h3>
        <p>Esto es un mensaje...</p>
      </div>
      <p className="absolute bottom-0 right-2 text-[8px]">11:52am</p>
      <span className="unread-point absolute right-4 rounded-full w-[10px] h-[10px] bg-[#00ff00]"></span>
    </li>
  );
};

export default ChatCard;
