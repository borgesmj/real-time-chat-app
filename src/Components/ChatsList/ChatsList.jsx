import ChatCard from "../ChatCard/ChatCard";
import SearchBAr from "../SearchBar/SearchBar";

const ChatsList = ({ darkTheme, openChat, currentUser, currentUserChats }) => {
  const orderedChats = currentUserChats.sort((a, b) => b.lastMessage.createdAt - a.lastMessage.createdAt)
  return (
    <div className="w-full bg-red-700">
      <ul
        id="chatslist"
        className="w-full overflow-y-auto absolute overflow-x-hidden"
      >
        {orderedChats.map((chat) => (
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
