import { useEffect } from "react";
import { addFriend } from "../../Process/handleFriendsList";

const FriendStatus = ({
  isFriend,
  requestSent,
  requestReceived,
}) => {
  const handleAddfriend = () => {
    addFriend()
  }

  return (
    <div className="friend-status max-w-[300px] text-center my-4 mx-auto">
      {isFriend ? (
        <p>Es amigo</p>
      ) : requestSent ? (
        <p>Solicitud enviada</p>
      ) : requestReceived ? (
        <p>Solicitud recibida</p>
      ) : (
        <button
          className="bg-red-200 w-[150px] h-[30px] rounded-md"
          onClick={() => {
            handleAddfriend()
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
