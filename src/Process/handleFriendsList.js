import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./Firebase";

export const addFriend = async (currentUser, newFriend) => {
  try {
    const docCurrentUserRef = doc(db, "users", currentUser.userId);
    const docNewFriendRef = doc(db, "users", newFriend.userId);
    const docSnap = await getDoc(docCurrentUserRef);
    if (docSnap.exists()){
      const data = docSnap.data()
        let requestSent = data.friendRequests.sent
        requestSent.push({
          userId: newFriend.userId,
          username: newFriend.username,
          name: newFriend.fullname,
          profilePic: newFriend.profile_pic
        })
        await updateDoc(docCurrentUserRef, {
            "friendRequests.sent": requestSent
        })
    }
    const docSnap2 = await getDoc(docNewFriendRef);
    if (docSnap2.exists()){
     const data = docSnap2.data()
        let requestReceived = data.friendRequests.recieved
        requestReceived.push({
          userId: currentUser.userId,
          username: currentUser.username,
          name: currentUser.fullname,
          profilePic: currentUser.profile_pic
        })
        await updateDoc(docNewFriendRef, {
            "friendRequests.recieved": requestReceived
        })
    }
    return true
  } catch (error) {
    console.log(error)
  }
};
