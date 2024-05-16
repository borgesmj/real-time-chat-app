const ChatName = ({darkTheme}) => {
  return (
    <div className={`flex justify-between items-center w-full ${!darkTheme ? 'bg-[#479ae0]' : 'bg-[#3ce0bc]'} h-12 md:h-20`}>
      una chat app
    </div>
  )
}

export default ChatName
