import React from "react";

const MessageSent = ({ children }) => {
  return (
    <div className="sender bg-[var(--message-sent)] w-[300px] lg:w-[350px] xl:w-[450px] p-4 rounded-t-xl rounded-l-xl mx-3 my-2 self-end relative before:border-b-[10px] before:border-b-solid before:border-b-[var(--message-sent)] text-[var(--text-200)]">
      {children}
    </div>
  );
};

export default MessageSent;
