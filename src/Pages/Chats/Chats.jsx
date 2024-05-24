import React from "react";
import Section from "../../Components/Section/Section";
import ChatsList from "../../Components/ChatsList/ChatsList";
import ChatSection from "../../Components/ChatSection/ChatSection";
import { useState } from "react";
import PageTemplate from "../../Templates/PageTemplate";

const Chats = ({ darkTheme, setSidebarOpen, sidebarOpen, currentUser }) => {
  const [chatOpened, setChatOpened] = useState(false);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setChatOpened(false);
    }
  });

  const openChat = () => {
    setChatOpened(true);
  };
  return (
    <PageTemplate
      darkTheme={darkTheme}
      setSidebarOpen={setSidebarOpen}
      sidebarOpen={sidebarOpen}
      currentUser = {currentUser}
    >
      <Section>
        <ChatsList darkTheme={darkTheme} openChat={openChat} />
      </Section>
      <input
        type="checkbox"
        name=""
        id="chat-section-cb"
        checked={chatOpened}
        readOnly
        className="hidden"
      />
      <ChatSection setChatOpened={setChatOpened} darkTheme={darkTheme} chatOpened = {chatOpened}/>
    </PageTemplate>
  );
};

export default Chats;
