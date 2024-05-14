import React from "react";
import Section from "../../Components/Section/Section";
import ChatsList from "../../Components/ChatsList/ChatsList";

const Chats = ({ darkTheme }) => {
  return (
    <div className="h-[95dvh]">
      <Section darkTheme={darkTheme}>
        <ChatsList darkTheme={darkTheme} />
      </Section>
    </div>
  );
};

export default Chats;
