import ChatCard from "../ChatCard/ChatCard";
import SearchBAr from "../SearchBar/SearchBar";

const ChatsList = ({ darkTheme, openChat, currentUser, currentUserChats }) => {
  console.log(currentUserChats)
  return (
    <div className="w-full bg-red-700">
      <ul
        id="chatslist"
        className="w-full overflow-y-auto absolute overflow-x-hidden"
      >
        {currentUserChats.map((chat) => (
          <ChatCard
            key={chat.chatId}
            darkTheme={darkTheme}
            openChat={openChat}
            chat={chat}
            currentUser={currentUser}
          />
        ))}
      </ul>
    </div>
  );
};

export default ChatsList;
