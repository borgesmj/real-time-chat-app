import { useEffect, useState } from "react";
import { addFriend, rejectRequest } from "../../Process/handleFriendsList";
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
    try {
      addFriend(currentUser, profileUser);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      alert("amigo agregado");
    }
  };

  const handleRejectRequest = () => {
    setIsLoading(true);
    try {
      rejectRequest(currentUser, profileUser);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      alert("solicitud rechazada");
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
        <p>Solicitud enviada</p>
      ) : requestReceived ? (
        <div>
          <button className="border-solid border-2 border-black">
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
