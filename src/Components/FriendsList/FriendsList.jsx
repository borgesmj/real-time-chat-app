import FriendCard from "../FriendCard/FriendCard";
const FriendsList = ({ list, message }) => {
  return (
    <div>
      {list.length > 0 ? (
        list.map((friend) => <FriendCard key={friend.id} friend={friend} />)
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
};

export default FriendsList;
