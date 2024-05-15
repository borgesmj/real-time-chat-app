import ChatCard from "../ChatCard/ChatCard"

const ChatsList = ({darkTheme, openChat}) => {
    return (
        <ul id="chatslist" className="w-full overflow-y-auto absolute overflow-x-hidden">
            <ChatCard darkTheme={darkTheme} openChat={openChat}/>
        </ul>
      )
    }

export default ChatsList
