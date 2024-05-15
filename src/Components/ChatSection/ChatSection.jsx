import ProfileBar from "../Profilebar/ProfileBar";
import ChatClosedMsg from "../ChatClosedMsg/ChatClosedMsg";
import MessageForm from "../MessageForm/MessageForm";

const ChatSection = ({ setChatOpened, darkTheme, chatOpened }) => {
  return (
    <div className="chat-section fixed w-[94dvw] h-[95dvh] top-2 rounded-[10px] md:static md:w-[50dvw] md:opacity-100 block md:translate-x-0 lg:w-[60dvw] ">
      {chatOpened ? (
        <>
          <ProfileBar setChatOpened={setChatOpened} darkTheme={darkTheme} />
          <MessageForm/>
        </>
      ) : (
        <ChatClosedMsg />
      )}
    </div>
  );
};

export default ChatSection;
