import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./Firebase";

export const addFriend = async (currentUserDocID, newFriendID, profileUserDocID, currentUserId) => {
  try {
    const docSentRef = doc(db, "users", currentUserDocID);
    const docRecievedRef = doc(db, "users", profileUserDocID)
    const docSnap = await getDoc(docSentRef);
    if (docSnap.exists()){
        const data = docSnap.data()
        let requestSent = data.friendRequests.sent
        requestSent.push(newFriendID)
        await updateDoc(docSentRef, {
            "friendRequests.sent": requestSent
        })
    }
    const docSnap2 = await getDoc(docRecievedRef);
    if (docSnap2.exists()){
        const data = docSnap2.data()
        let requestReceived = data.friendRequests.recieved
        requestReceived.push(currentUserId)
        await updateDoc(docRecievedRef, {
            "friendRequests.recieved": requestReceived
        })
    }
    return true
  } catch (error) {
    console.log(error)
  }
};
