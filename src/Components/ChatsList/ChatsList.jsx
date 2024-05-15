import ChatCard from "../ChatCard/ChatCard"

const ChatsList = ({darkTheme}) => {
    return (
        <ul id="chatslist" className="w-full overflow-y-auto absolute overflow-x-hidden">
            <ChatCard darkTheme={darkTheme}/>
        </ul>
      )
    }

export default ChatsList
