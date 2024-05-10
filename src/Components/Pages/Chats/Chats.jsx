import React from "react";
import Section from "../../Section/Section";
import ChatAccess from "../../ChatAccess/ChatAccess";

const Chats = ({darkTheme}) => {
  return (
      <Section darkTheme = {darkTheme}>
        <ChatAccess />
      </Section>
  );
};

export default Chats;
