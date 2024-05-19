import ChatCard from "../ChatCard/ChatCard"
import SearchBAr from "../SearchBar/SearchBar"

const ChatsList = ({darkTheme, openChat}) => {
    return (
        <div className="w-full">
            <SearchBAr/>
            <ul id="chatslist" className="w-full overflow-y-auto absolute overflow-x-hidden">
            <ChatCard darkTheme={darkTheme} openChat={openChat}/>
        </ul>
        </div>
      )
    }

export default ChatsList
