import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./Firebase";

export const addFriend = async (currentUser, newFriend) => {
  try {
    const docCurrentUserRef = doc(db, "users", currentUser.userId);
    const docNewFriendRef = doc(db, "users", newFriend.userId);
    const docSnap = await getDoc(docCurrentUserRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      let requestSent = data.friendRequests.sent;
      requestSent.push({
        userId: newFriend.userId,
        username: newFriend.username,
        name: newFriend.fullname,
        profilePic: newFriend.profile_pic,
      });
      await updateDoc(docCurrentUserRef, {
        "friendRequests.sent": requestSent,
      });
    }
    const docSnap2 = await getDoc(docNewFriendRef);
    if (docSnap2.exists()) {
      const data = docSnap2.data();
      let requestReceived = data.friendRequests.recieved;
      requestReceived.push({
        userId: currentUser.userId,
        username: currentUser.username,
        name: currentUser.fullname,
        profilePic: currentUser.profile_pic,
      });
      await updateDoc(docNewFriendRef, {
        "friendRequests.recieved": requestReceived,
      });
    }
    return true;
  } catch (error) {
    console.log(error);
  }
};

export const rejectRequest = async (currentUser, newFriend) => {
  try {
    const docCurrentUserRef = doc(db, "users", currentUser.userId);
    const docNewFriendRef = doc(db, "users", newFriend.userId);
    const docSnap = await getDoc(docCurrentUserRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      let friendRequests = data.friendRequests.recieved;
      friendRequests = friendRequests.filter((request) => {
        return request.userId !== newFriend.userId;
      });
      await updateDoc(docCurrentUserRef, {
        "friendRequests.recieved": friendRequests,
      });
    }
    const docSnap2 = await getDoc(docNewFriendRef);
    if (docSnap2.exists()) {
      const data = docSnap2.data();
      let friendRequests = data.friendRequests.sent;
      friendRequests = friendRequests.filter((request) => {
        return request.userId !== currentUser.userId;
      });
      await updateDoc(docNewFriendRef, {
        "friendRequests.sent": friendRequests,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const acceptFriendRequest = async (currentUser, newFriend) => {
  try {
    const docCurrentUserRef = doc(db, "users", currentUser.userId);
    const docNewFriendRef = doc(db, "users", newFriend.userId);
    const docSnap = await getDoc(docCurrentUserRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      let friendRequests = data.friendRequests.recieved;
      friendRequests = friendRequests.filter((request) => {
        return request.userId !== newFriend.userId;
      });
      await updateDoc(docCurrentUserRef, {
        "friendRequests.recieved": friendRequests,
      });
      let friendsList = data.friendsList;
      friendsList.push({
        userId: newFriend.userId,
        username: newFriend.username,
        name: newFriend.fullname,
        profilePic: newFriend.profile_pic,
      });
      await updateDoc(docCurrentUserRef, {
        friendsList: friendsList,
      });
    }
    const docSnap2 = await getDoc(docNewFriendRef);
    if (docSnap2.exists()) {
      const data = docSnap2.data();
      let friendRequests = data.friendRequests.sent;
      friendRequests = friendRequests.filter((request) => {
        return request.userId !== currentUser.userId;
      });
      await updateDoc(docNewFriendRef, {
        "friendRequests.sent": friendRequests,
      });
      let friendsList = data.friendsList;
      friendsList.push({
        userId: currentUser.userId,
        username: currentUser.username,
        name: currentUser.fullname,
        profilePic: currentUser.profile_pic,
      });
      await updateDoc(docNewFriendRef, {
        friendsList: friendsList,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const removeRequest = async (currentUser, newFriend) => {
  try {
    const docCurrentUserRef = doc(db, "users", currentUser.userId);
    const docNewFriendRef = doc(db, "users", newFriend.userId);
    const docSnap = await getDoc(docCurrentUserRef)
    const docSnap2 = await getDoc(docNewFriendRef)
    if (docSnap.exists() && docSnap2.exists()){
      const currentUserData = await docSnap.data()
      const newFriendData = await docSnap2.data()
      let sentFriendRequests = currentUserData.friendRequests.sent
      sentFriendRequests = sentFriendRequests.filter((request) => {
        return request.userId !== newFriend.userId
      })
      await updateDoc(docCurrentUserRef, {
        "friendRequests.sent": sentFriendRequests
      })
      let recievedFriendRequests = newFriendData.friendRequests.recieved
      recievedFriendRequests = recievedFriendRequests.filter((request) => {
        return request.userId !== currentUser.userId
      })
      await updateDoc(docNewFriendRef, {
        "friendRequests.recieved": recievedFriendRequests
      })
    }
  } catch (error) {
    console.log(error);
  }
};
