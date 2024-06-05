import { useState, useRef } from "react";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../Process/Firebase";

const MessageForm = ({ chatId, currentUser }) => {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 5 * 24)}px`;
    }
  };

  const getId = () => {
    const numero = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36).substring(2);

    return numero + fecha;
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      const messageDocRef = doc(db, "chats", chatId);
      const chatDocSnap = await getDoc(messageDocRef);
      if (chatDocSnap.exists()) {
        const messagesData = await chatDocSnap.data().messages;
        const newMessage = {
          messageId: getId(),
          text: text,
          createdAt: new Date(),
          status: "sent",
          sentBy: currentUser.username,
        };
        messagesData.push(newMessage);
        await updateDoc(messageDocRef, {
          messages: messagesData,
          lastMessage: newMessage,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setText("")
    }
  };
  return (
    <form
      className="absolute bottom-0 w-full bg-gray-100 flex items-center py-3 px-4 shadow-lg"
      onSubmit={sendMessage}
    >
      <div className="flex-grow mr-4">
        <textarea
          name="message"
          id="message"
          ref={textareaRef}
          value={text}
          onChange={handleChange}
          className="w-full max-h-32 resize-none border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-blue-500 overflow-y-scroll"
          placeholder="Escribe tu mensaje..."
          rows={1}
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-full flex justify-center items-center hover:bg-blue-600 transition-colors"
        aria-label="Enviar mensaje"
      >
        <PaperPlaneTilt size={24} />
      </button>
    </form>
  );
};

export default MessageForm;
