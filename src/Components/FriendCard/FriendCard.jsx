import { Check } from "@phosphor-icons/react";
import {acceptFriendRequest, rejectRequest, deleteFriend, removeRequest } from '../../Process/handleFriendsList'

const FriendCard = ({
  friends,
  requestSent,
  requestReceived,
  name,
  username,
  profilePic,
  currentUserDocId,
  newFriendID
}) => {
  return (
    <div className="bg-white shadow-2xl p-4 h-fit w-[300px] rounded-2xl my-2">
      <div className="card-header flex flex-row justify-start p-2">
        <img
          src={profilePic}
          alt=""
          className="h-12 w-auto rounded-full"
        />
        <div className="ml-2">
          <h2 className="font-semibold">{name}</h2>
          <a href={`/user/${username}`}>
            <span>{`@${username}`}</span>
          </a>
        </div>
      </div>
      <div className="options-buttons flex flex-row justify-around">
        {/* Amigo agregado*/}
        {friends && (
          <>
            <span className="w-1/2 flex flex-row items-center">
              <Check /> Agregado
            </span>
            <button className="w-1/2 p-4 bg-red-500 rounded-2xl" onClick={() => {deleteFriend(currentUserDocId, newFriendID)}}>
              Eliminar
            </button>
          </>
        )}
        {/* Solicitud de amistad enviada
         */}
        {requestSent && (
          <>
            <button className="w-full p-4 bg-blue-500 rounded-2xl" onClick={() => {removeRequest(currentUserDocId, newFriendID)}}>
              Cancelar Solicitud
            </button>
          </>
        )}
        {/*Aceptar/rechazar Solicitud  de amistad recibida*/}
        {requestReceived && (
          <>
            <button className="w-1/2 p-4 bg-green-500 rounded-2xl" onClick= {() => {acceptFriendRequest(currentUserDocId, newFriendID)}}>
              Aceptar
            </button>
            <button className="w-1/2 p-4 bg-red-500 rounded-2xl" onClick={() => {rejectRequest(currentUserDocId, newFriendID)}}>
              Rechazar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default FriendCard;
