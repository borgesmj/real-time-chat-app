import ProfileBar from "../Profilebar/ProfileBar";
import ChatClosedMsg from "../ChatClosedMsg/ChatClosedMsg";
import MessageForm from "../MessageForm/MessageForm";
import ChatLayout from "../ChatLayout/ChatLayout";

const ChatSection = ({
  setChatOpened,
  darkTheme,
  chatOpened,
  chatId,
  currentUser,
  chatName
}) => {
  return (
    <main className="chat-section relative md:left-[23rem] w-dvw h-full  top-0 md:w-[23rem] md:opacity-100 md:transform-none block lg:w-[60dvw] 2xl:left-[28rem]">
      {chatOpened ? (
        <div className="flex flex-col items-center">
          <ProfileBar setChatOpened={setChatOpened} darkTheme={darkTheme} chatName={chatName} />
          <ChatLayout chatId={chatId} currentUser={currentUser} />
          <MessageForm chatId={chatId} currentUser={currentUser} />
        </div>
      ) : (
        <ChatClosedMsg />
      )}
    </main>
  );
};

export default ChatSection;
