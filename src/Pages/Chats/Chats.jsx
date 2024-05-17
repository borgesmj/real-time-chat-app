import React from "react";
import Section from "../../Components/Section/Section";
import ChatsList from "../../Components/ChatsList/ChatsList";
import ChatSection from "../../Components/ChatSection/ChatSection";
import { useState } from "react";
import PageTemplate from "../../Templates/PageTemplate";

const Chats = ({ darkTheme, openSidebar, sidebarOpen }) => {
  const [chatOpened, setChatOpened] = useState(false);

  document.addEventListener("keydown", (event) => {

    if(event.key === 'Escape'){
      setChatOpened(false)
    }
  })

  const openChat = () => {
    setChatOpened(true);
  };
  return (
    <PageTemplate darkTheme={darkTheme} openSidebar={openSidebar} sidebarOpen={sidebarOpen}>
      chatspage
    </PageTemplate>
    // <div className="h-[95dvh] md:flex lg:mx-8 xl:mx-20">
    //   <input type="checkbox" name="" id="chat-section-cb" checked={chatOpened} readOnly className="hidden"/>
    //   <Section darkTheme={darkTheme}>
    //     <ChatsList darkTheme={darkTheme} openChat={openChat} />
    //   </Section>
    //   <ChatSection setChatOpened={setChatOpened} darkTheme={darkTheme} chatOpened = {chatOpened}/>
    // </div>
  );
};

export default Chats;
