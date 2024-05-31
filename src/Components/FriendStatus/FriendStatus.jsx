import React from "react";

const FriendStatus = ({ isFriend, requestSent, requestReceived }) => {
  return (
    <div className="friend-status max-w-[300px] text-center my-4 mx-auto">
      {isFriend ? (
        <p>Es amigo</p>
      ) : requestSent ? (
        <p>Solicitud enviada</p>
      ) : requestReceived ? (
        <p>Solicitud recibida</p>
      ) : (
        <button className="bg-red-200 w-[150px] h-[30px] rounded-md">
          Agregar Amigo
        </button>
      )}

      {/**/}
    </div>
  );
};

export default FriendStatus;
