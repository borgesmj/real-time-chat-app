import FriendCard from "../FriendCard/FriendCard";
const FriendsList = ({
  list,
  message,
  friends,
  requestSent,
  requestReceived,
}) => {
  return (
    <div>
      {list.length > 0 ? (
        list.map((friend) => (
          <FriendCard
            key={friend.id}
            friend={friend}
            requestSent={requestSent}
            requestReceived={requestReceived}
            friends = {friends}
            />
        ))
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
};

export default FriendsList;
