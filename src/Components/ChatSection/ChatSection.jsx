import ProfileBar from "../Profilebar/ProfileBar";

const ChatSection = ({setChatOpened}) => {
  return (
    <div className="chat-section fixed w-[95dvw] h-[95dvh] top-2 rpunded-[10px] bg-[#ff0000] md:static md:w-[50dvw] md:opacity-100 block md:translate-x-0 lg:w-[60dvw] ">   
      <ProfileBar setChatOpened = {setChatOpened} />
    </div>
  );
};

export default ChatSection;
