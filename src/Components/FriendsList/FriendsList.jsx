import FriendCard from "../FriendCard/FriendCard";
const FriendsList = ({
  list,
  message,
  friends,
  requestSent,
  requestReceived,
  currentUserDocId
}) => {
  return (
    <div>
      {list.length > 0 ? (
        list.map((friend) => (
          <FriendCard
            key={friend.userId}
            name={friend.name}
            username={friend.username}
            profilePic={friend.profilePic}
            newFriendID = {friend.userId}
            requestSent={requestSent}
            requestReceived={requestReceived}
            friends={friends}
            currentUserDocId = {currentUserDocId}
          />
        ))
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
};

export default FriendsList;
