import { useEffect, useState } from "react";
import MessageRecieved from "./MessageRecieved";
import MessageSent from "./MessageSent";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../Process/Firebase";

const ChatBubbles = ({ chatId, currentUser }) => {
  const [chatMessages, setChatMessages] = useState([]);
  
  useEffect(() => {
    const chatDocRef = doc(db, "chats", chatId);
    const unsubscribe = onSnapshot(chatDocRef, (chatSnap) => {
      if (chatSnap.exists()) {
        const messages = chatSnap.data().messages;
        // Ordenar los mensajes por timestamp
        messages.sort((a, b) => a.createdAt.seconds - b.createdAt.seconds);
        setChatMessages(messages);
      }
    }, (error) => {
      console.log(error);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [chatId]);

  const formatTimestampToTime = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
    const now = new Date();
  
    const timeDifference = now - date;
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
  
    if (timeDifference > 24 * 60 * 60 * 1000) { // Más de 24 horas
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Los meses van de 0 a 11
      const year = date.getFullYear();
      return `${day}/${month}/${year} ${hours}:${minutes}`;
    } else { // Menos de 24 horas
      return `${hours}:${minutes}`;
    }
  };
  

  return (
    <div className="w-full md:w-3/4 absolute top-12 md:top-20 bottom-12 bg-[var(--transparent-accent)] flex flex-col pb-10">
      <div className="read-messages h-fit flex flex-col absolute bottom-8 left-0 right-0  overflow-y-auto max-h-[90%] px-3">
        {chatMessages.map((message) => {
          if (message.sentBy === currentUser.username) {
            return (
              <MessageSent key={message.messageId}>
                <p className="w-full break-words">{message.text}</p>
                <span className="text-[10px] absolute -bottom-4 right-0">
                  {formatTimestampToTime(message?.createdAt)}
                </span>
              </MessageSent>
            );
          } else {
            return (
              <MessageRecieved key={message.messageId}>
                <p>{message.text}</p>
                <span className="text-[10px] absolute -bottom-4 left-0">
                  {formatTimestampToTime(message?.createdAt)}
                </span>
              </MessageRecieved>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ChatBubbles;
