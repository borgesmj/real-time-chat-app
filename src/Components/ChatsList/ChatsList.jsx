import ChatCard from "../ChatCard/ChatCard"

const ChatsList = ({darkTheme}) => {
    return (
        <ul>
          <li>
            <ChatCard darkTheme={darkTheme}/>
          </li>
        </ul>
      )
    }

export default ChatsList
