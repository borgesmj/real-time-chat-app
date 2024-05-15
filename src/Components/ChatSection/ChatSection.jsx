import React from "react";

const ChatSection = ({setChatOpened}) => {
  return (
    <div className="chat-section fixed w-[95dvw] h-[95dvh] top-2 rpunded-[10px]">
      ChatSection
      <span onClick={() => {setChatOpened(false)}}>back</span>
    </div>
  );
};

export default ChatSection;
