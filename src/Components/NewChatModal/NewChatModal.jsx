import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import Modal from "../Modal/Modal";
import { PaperPlaneRight, XCircle } from "@phosphor-icons/react";
import { db } from "../../Process/Firebase";
import { useState } from "react";

const NewChatModal = ({
  newChatModal,
  setNewChatModal,
  newMessageTo,
  currentUser,
  currentUserChats,
}) => {
  const [messageText, setMessageText] = useState("");
  const getId = () => {
    const numero = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36).substring(2);

    return numero + fecha;
  };
  const sendNewMessage = async (e) => {
    e.preventDefault();
    try {
      const matchingchats = currentUserChats.filter((chat) => {
        return (
          chat.participants.includes(currentUser.username) &&
          chat.participants.includes(newMessageTo)
        );
      });
      // si el chat existe, actualizar el documento
      if (matchingchats.length > 0) {
        const chatId = matchingchats[0].chatId;
        const chatDocRef = doc(db, "chats", chatId);
        const chatDocSnap = await getDoc(chatDocRef);
        if (chatDocSnap.exists()) {
          const messagesData = await chatDocSnap.data().messages;
          const newMessage = {
            messageId: getId(),
            text: messageText,
            createdAt: new Date(),
            status: "sent",
            sentBy: currentUser.username,
          };
          messagesData.push(newMessage);
          console.log(messagesData);
          await updateDoc(chatDocRef, {
            messages: messagesData,
            lastMessage: newMessage,
          });
        }
        // si el chat no existe, crea un documento nuevo
      } else {
        const newChatDocRef = doc(collection(db, "chats"));
        const newChatId = newChatDocRef.id;
        const newChatData = {
          chatId: newChatId,
          createdAt: new Date(),
          participants: [currentUser.username, newMessageTo],
          messages: [
            {
              messageId: getId(),
              text: messageText,
              createdAt: new Date(),
              status: "sent",
              sentBy: currentUser.username,
            },
          ],
          lastMessage: {
            messageId: getId(),
            text: messageText,
            createdAt: new Date(),
            status: "sent",
            sentBy: currentUser.username,
          },
        };
        await setDoc(newChatDocRef, newChatData);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setNewChatModal(false);
    }
  };
  return (
    <>
      {newChatModal && (
        <Modal>
          <div className="w-dvw h-[400px] bg-white md:w-[400px] rounded-2xl flex flex-col items-center justify-center">
            <p
              className="w-full flex justify-end mr-10"
              onClick={() => {
                setNewChatModal(false);
              }}
            >
              <span className="cursor-pointer">
                <XCircle size={32} />
              </span>
            </p>
            <h2 className="text-xl my-4">
              Enviar un nuevo mensaje a {newMessageTo}
            </h2>
            <form action="">
              <textarea
                value={messageText}
                onChange={(e) => {
                  setMessageText(e.target.value);
                }}
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Envia un nuevo mensaje..."
                className="resize-none w-full focus:outline-none border-solid border-[2px] border-transparent focus:border-[var(--accent-200)] my-4"
              ></textarea>
              <button
                className="my-4 w-full bg-[var(--primary-100)] p-4 flex justify-center items-center h-16 rounded-[10px] transition-all duration-300 ease-out scale-100 hover:scale-110 text-2xl"
                onClick={(e) => {
                  sendNewMessage(e);
                }}
              >
                Enviar <PaperPlaneRight />
              </button>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
};

export default NewChatModal;
