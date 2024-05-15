import React from "react";
import Section from "../../Components/Section/Section";
import ChatsList from "../../Components/ChatsList/ChatsList";
import ChatSection from "../../Components/ChatSection/ChatSection";
import { useState } from "react";

const Chats = ({ darkTheme }) => {
  const [chatOpened, setChatOpened] = useState(false);

  const openChat = () => {
    setChatOpened(true);
  };
  return (
    <div className="h-[95dvh]">
      <input type="checkbox" name="" id="chat-section-cb" checked={chatOpened} readOnly className="hidden"/>
      <Section darkTheme={darkTheme}>
        <ChatsList darkTheme={darkTheme} openChat={openChat} />
      </Section>
      <ChatSection setChatOpened={setChatOpened} />
    </div>
  );
};

export default Chats;
