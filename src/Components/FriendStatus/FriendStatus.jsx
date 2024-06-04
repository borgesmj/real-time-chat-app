import { useEffect, useState } from "react";
import {
  addFriend,
  rejectRequest,
  acceptFriendRequest,
  removeRequest,
} from "../../Process/handleFriendsList";
import Loader from "../Loader/Loader";

const FriendStatus = ({
  isFriend,
  requestSent,
  requestReceived,
  currentUser,
  profileUser,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleAddfriend = () => {
    setIsLoading(true);
    const addNewFriend = addFriend(currentUser.userId, profileUser.userId);
    if (addNewFriend){
      setIsLoading(false)
    }
  };

  const handleRejectRequest = () => {
    setIsLoading(true);
    const rejectFriendRequest = rejectRequest(currentUser.userId, profileUser.userId);
    if (rejectFriendRequest){
      setIsLoading(false)
    } 
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="friend-status max-w-[300px] text-center my-4 mx-auto">
      {isFriend ? (
        <p>Es amigo</p>
      ) : requestSent ? (
        <div>
          <button
            className="border-soli border-2 border-black"
            onClick={() => {
              removeRequest(currentUser, profileUser);
            }}
          >
            Cancelar solicitud
          </button>
        </div>
      ) : requestReceived ? (
        <div>
          <button
            className="border-solid border-2 border-black"
            onClick={() => {
              acceptFriendRequest(currentUser, profileUser);
            }}
          >
            Aceptar
          </button>
          <button
            className="border-solid border-2 border-black"
            onClick={() => {
              handleRejectRequest(currentUser, profileUser);
            }}
          >
            Rechazar
          </button>
        </div>
      ) : (
        <button
          className="bg-red-200 w-[150px] h-[30px] rounded-md"
          onClick={() => {
            handleAddfriend();
          }}
        >
          Agregar Amigo
        </button>
      )}

      {/**/}
    </div>
  );
};

export default FriendStatus;
