import ProfileBar from "../Profilebar/ProfileBar";

const ChatSection = ({setChatOpened, darkTheme}) => {
  return (
    <div className="chat-section fixed w-[94dvw] h-[95dvh] top-2 rpunded-[10px] md:static md:w-[50dvw] md:opacity-100 block md:translate-x-0 lg:w-[60dvw] ">   
      <ProfileBar setChatOpened = {setChatOpened} darkTheme={darkTheme} />
    </div>
  );
};

export default ChatSection;
