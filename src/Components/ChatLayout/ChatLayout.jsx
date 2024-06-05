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
    let hours = date.getHours();
    let minutes = date.getMinutes();
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes}`;
  };

  return (
    <div className="w-full absolute top-12 md:top-20 bottom-12 bg-white flex flex-col overflow-y-auto pb-10">
      <div className="flex flex-grow flex-col-reverse">
        {chatMessages.map((message) => {
          if (message.sentBy === currentUser.username) {
            return (
              <MessageSent key={message.messageId}>
                <p>{message.text}</p>
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
