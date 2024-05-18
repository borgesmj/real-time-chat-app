import ProfileBar from "../Profilebar/ProfileBar";
import ChatClosedMsg from "../ChatClosedMsg/ChatClosedMsg";
import MessageForm from "../MessageForm/MessageForm";

const ChatSection = ({ setChatOpened, darkTheme, chatOpened }) => {
  return (
    <main className="chat-section relative md:left-[23rem] w-[21rem] h-[95dvh] rounded-[10px] top-0 md:w-[23rem] md:opacity-100 md:transform-none block lg:w-[60dvw] xl:w-[66dvw] 2xl:w-[75dvw]">
      {chatOpened ? (
        <>
          <ProfileBar setChatOpened={setChatOpened} darkTheme={darkTheme} />
          <MessageForm/>
        </>
      ) : (
        <ChatClosedMsg />
      )}
    </main>
  );
};

export default ChatSection;
