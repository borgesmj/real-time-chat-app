import React from "react";

const ChatCard = ({ darkTheme, openChat, currentUser, chat }) => {
  const participantName = chat.participants.filter(
    (name) => name !== currentUser.username
  );

  if (participantName.length === 0) {
    participantName.push("Mensajes Guardados");
  }

  const formatTimestampToTime = (timestamp) => {
    // Convertir el timestamp a milisegundos
    if (!timestamp){
      return "00:00"
    } else{
      const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
    
    // Obtener horas y minutos
    let hours = date.getHours();
    let minutes = date.getMinutes();
  
    // Añadir un 0 delante si es necesario
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    return `${hours}:${minutes}`;
    }
  }
  

  


  const handleClick = () => {
    openChat(chat.chatId, participantName);
  };
  return (
    <li
      onClick={handleClick}
      className={`w-full h-[70px] transition-[background-color] ease-linear ${
        !darkTheme ? "bg-[#f5f5f5]" : "bg-[#1b283f]"
      } flex flex-row items-center justify-start rounded-[5px] relative hover:cursor-pointer p-2 mr-4 hover:bg-[#ffffff10]`}
    >
      <img
        src="/default-pfp.png"
        alt=""
        className="rounded-full h-[50px] w-[50px]"
      />
      <div className="ml-2 h-full flex flex-col justify-evenly w-4/5">
        <h3 className="font-bold">{participantName}</h3>
        <p>{chat.lastMessage.text}</p>
      </div>
      <p className="absolute bottom-0 right-2 text-[8px]">{formatTimestampToTime(chat?.lastMessage?.createdAt)}</p>
      <span className="unread-point absolute right-4 rounded-full w-[10px] h-[10px] bg-[#00ff00]"></span>
    </li>
  );
};

export default ChatCard;
