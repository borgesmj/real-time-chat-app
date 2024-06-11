import { Check } from "@phosphor-icons/react";
import {
  acceptFriendRequest,
  rejectRequest,
  deleteFriend,
  removeRequest,
} from "../../Process/handleFriendsList";

const FriendCard = ({
  friends,
  requestSent,
  requestReceived,
  name,
  username,
  profilePic,
  currentUserDocId,
  newFriendID,
  openModal,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    openModal(username);
  };

  return (
    <div className="bg-[var(--bg-100)] shadow-2xl p-4 h-fit w-[300px] rounded-2xl my-2 flex flex-col items-center mt-6">
      <img src={profilePic} alt="" className="w-16 rounded-full -mt-8" />
      <div className="card-header flex flex-row justify-start p-2">
        <div className="ml-2">
          <a href={`/user/${username}`}>
            <span className="text-xl">{`@${username}`}</span>
          </a>
        </div>
      </div>
      <div className="options-buttons flex flex-row justify-between w-full">
        {/* Amigo agregado*/}
        {friends && (
          <>
            <button
              className="w-[45%] flex flex-row bg-blue-400 justify-center items-center rounded-2xl border-solid border-2 border-transparent hover:bg-white hover:text-blue-400 hover:border-blue-400 transition-all duration-200 ease-linear"
              onClick={(e) => {
                handleClick(e);
              }}
            >
              Enviar mensaje
            </button>
            <button
              className="w-[45%] p-2 bg-red-500 rounded-2xl border-solid border-2 border-transparent hover:bg-white hover:text-red-500 hover:border-red-500 transition-all duration-200 ease-linear"
              onClick={() => {
                deleteFriend(currentUserDocId, newFriendID);
              }}
            >
              Eliminar
            </button>
          </>
        )}
        {/* Solicitud de amistad enviada
         */}
        {requestSent && (
          <>
            <button
              className="w-full p-4 bg-blue-500 border-solid border-2 border-transparent rounded-2xl transition-all  hover:bg-white hover:border-blue-500 hover:text-blue-500"
              onClick={() => {
                removeRequest(currentUserDocId, newFriendID);
              }}
            >
              Cancelar Solicitud
            </button>
          </>
        )}
        {/*Aceptar/rechazar Solicitud  de amistad recibida*/}
        {requestReceived && (
          <>
            <button
              className="w-1/2 border-solid border-transparent border-2 p-4 bg-green-500 rounded-2xl hover:bg-white hover:text-green-500 hover:border-green-500"
              onClick={() => {
                acceptFriendRequest(currentUserDocId, newFriendID);
              }}
            >
              Aceptar
            </button>
            <button
              className="w-1/2 border-solid border-transparent border-2 p-4 bg-red-500 rounded-2xl hover:bg-white hover:text-red-500 hover:border-red-500 "
              onClick={() => {
                rejectRequest(currentUserDocId, newFriendID);
              }}
            >
              Rechazar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default FriendCard;
