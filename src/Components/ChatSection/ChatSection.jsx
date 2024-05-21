import ProfileBar from "../Profilebar/ProfileBar";
import ChatClosedMsg from "../ChatClosedMsg/ChatClosedMsg";
import MessageForm from "../MessageForm/MessageForm";
import ChatLayout from "../ChatLayout/ChatLayout"

const ChatSection = ({ setChatOpened, darkTheme, chatOpened }) => {
  return (
    <main className="chat-section relative md:left-[23rem] w-dvw h-full  top-0 md:w-[23rem] md:opacity-100 md:transform-none block lg:w-[60dvw] 2xl:left-[28rem]">
      {chatOpened ? (
        <>
          <ProfileBar setChatOpened={setChatOpened} darkTheme={darkTheme} />
          <ChatLayout/>
          <MessageForm/>
        </>
      ) : (
        <ChatClosedMsg />
      )}
    </main>
  );
};

export default ChatSection;
