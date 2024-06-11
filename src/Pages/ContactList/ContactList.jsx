import { useEffect, useState } from "react";
import FriendsList from "../../Components/FriendsList/FriendsList";
import Section from "../../Components/Section/Section";
import PageTemplate from "../../Templates/PageTemplate";
import NewChatModal from "../../Components/NewChatModal/NewChatModal";
const ContactList = ({
  darkTheme,
  setSidebarOpen,
  sidebarOpen,
  currentUser,
  setModalIsOpen,
  currentUserChats
}) => {
  const [friends, setFriends] = useState(true);
  const [requestSent, setRequestSent] = useState(false);
  const [requestReceived, setRequestReceived] = useState(false);
  const [friendsList, setFriendsList] = useState([]);
  const [recievedList, setRecievedList] = useState([]);
  const [requestList, setRequestList] = useState([]);
  const [newChatModal, setNewChatModal] = useState(false);
  const [newMessageTo, setNewMessageTo] = useState('')

  useEffect(() => {
    if (currentUser) {
      setFriendsList(currentUser.friendsList);
      setRecievedList(currentUser.friendRequests.recieved);
      setRequestList(currentUser.friendRequests.sent);
    }
  }, []);
  const openModal = (username) => {
    setNewMessageTo(username);
    setNewChatModal(true)
  };
  return (
    <PageTemplate
      darkTheme={darkTheme}
      setSidebarOpen={setSidebarOpen}
      sidebarOpen={sidebarOpen}
      currentUser={currentUser}
      setModalIsOpen={setModalIsOpen}
    >
      <Section>
        <h1>Lista de amigos</h1>
        <div className="my-4 w-full flex flex-row items-center justify-between text-center">
          <div
            className={`my-4 cursor-pointer w-full bg-gray-400 h-12 flex justify-center items-center text-white border-solid border-b-[4px] ${
              friends ? "border-b-red-300" : "border-b-gray-400"
            }`}
            onClick={() => {
              setFriends(true);
              setRequestSent(false);
              setRequestReceived(false);
            }}
          >
            Agregados
          </div>
          <div
            className={`my-4 cursor-pointer w-full bg-gray-400 h-12 flex justify-center items-center text-white border-solid border-b-[4px] ${
              requestReceived ? "border-b-red-300" : "border-b-gray-400"
            }`}
            onClick={() => {
              setFriends(false);
              setRequestSent(false);
              setRequestReceived(true);
            }}
          >
            Solicitudes Recibidas
          </div>
          <div
            className={`my-4 cursor-pointer w-full bg-gray-400 h-12 flex justify-center items-center text-white border-solid border-b-[4px] ${
              requestSent ? "border-b-red-300" : "border-b-gray-400"
            }`}
            onClick={() => {
              setFriends(false);
              setRequestSent(true);
              setRequestReceived(false);
            }}
          >
            Solicitudes Enviadas
          </div>
        </div>
        <div className="overflow-y-auto h-fit w-full flex flex-col items-center">
          {/* Liste de amigps agregados*/}
          {friends && (
            <FriendsList
              list={friendsList}
              message="Aun no tienes amigos agregados"
              friends={friends}
              requestReceived={requestReceived}
              requestSent={requestSent}
              currentUserDocId={currentUser.userId}
              openModal={openModal}
            />
          )}
          {/* Lista de solicitudes enviadas*/}
          {requestSent && (
            <FriendsList
              list={requestList}
              message="No tienes has solicitado agregar amigos"
              friends={friends}
              requestReceived={requestReceived}
              requestSent={requestSent}
              currentUserDocId={currentUser.userId}
              openModal={openModal}
            />
          )}
          {/* Lista de solicitudes recibidas*/}
          {requestReceived && (
            <FriendsList
              list={recievedList}
              message="No tienes solicitudes pendientes"
              friends={friends}
              requestReceived={requestReceived}
              requestSent={requestSent}
              currentUserDocId={currentUser.userId}
              openModal={openModal}
            />
          )}
        </div>
      </Section>
      <NewChatModal
        newChatModal={newChatModal}
        setNewChatModal={setNewChatModal}
        newMessageTo={newMessageTo}
        currentUser={currentUser}
        currentUserChats={currentUserChats}
      />
    </PageTemplate>
  );
};

export default ContactList;
