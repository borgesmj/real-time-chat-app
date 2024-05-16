import ChatCard from "../ChatCard/ChatCard"
import ChatName from "../ChatName/ChatName"

const ChatsList = ({darkTheme, openChat}) => {
    return (
        <div className="w-full">
            <ChatName darkTheme={darkTheme}/>
            <ul id="chatslist" className="w-full overflow-y-auto absolute overflow-x-hidden">
            <ChatCard darkTheme={darkTheme} openChat={openChat}/>
        </ul>
        </div>
      )
    }

export default ChatsList
