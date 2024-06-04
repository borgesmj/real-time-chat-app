import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./Firebase";

// Funciones para agregar, rechazar, aceptar y cancelar solicitudes de amistad
// Reciben como parametro los id de cada usuario, que son los mismo id de los documentos
// extraen la informacion con respecto al documento
// y actualizan los datos en la base de datos
export const addFriend = async (currentUserDocId, newFriendDocID) => {
  try {
    const currentUserDocRef = doc(db, "users", currentUserDocId)
    const newFriendDocRef = doc(db, "users", newFriendDocID)
    const currentUserDocSnap = await getDoc(currentUserDocRef)
    const newFriendDocSnap = await getDoc(newFriendDocRef)
    if (currentUserDocSnap.exists() && newFriendDocSnap.exists()) {
      const currentUSerData = await currentUserDocSnap.data()
      const newFriendData = await newFriendDocSnap.data()
      const sentFriendRequests = currentUSerData.friendRequests.sent
      const recievedFriendRequests = newFriendData.friendRequests.recieved
      sentFriendRequests.push({
        name: newFriendData.fullname,
        profilePic: newFriendData.profile_pic,
        userId: newFriendData.userId,
        username: newFriendData.username,
      })
      recievedFriendRequests.push({
        name: currentUSerData.fullname,
        profilePic: currentUSerData.profile_pic,
        userId: currentUSerData.userId,
        username: currentUSerData.username,
      })
      await updateDoc(currentUserDocRef, {
        "friendRequests.sent": sentFriendRequests
      })
      await updateDoc(newFriendDocRef, {
        "friendRequests.recieved": recievedFriendRequests
      })
      return true
    }
  } catch (error) {
    console.log(error);
  } finally {
    alert("amigo agregado");
  }
};
// Funcion para rechazar la solicitus de amistad
export const rejectRequest = async (currentUserDocId, newFriendDocID) => {
  try {
    const currentUserDocRef = doc(db, "users", currentUserDocId)
    const newFriendDocRef = doc(db, "users", newFriendDocID)
    const currentUserDocSnap = await getDoc(currentUserDocRef)
    const newFriendDocSnap = await getDoc(newFriendDocRef)
    if (currentUserDocSnap.exists() && newFriendDocSnap.exists()) {
      const currentUSerData = await currentUserDocSnap.data()
      const newFriendData = await newFriendDocSnap.data()
      let recievedFriendRequest = currentUSerData.friendRequests.recieved
      recievedFriendRequest = recievedFriendRequest.filter((request) => {
        return request.userId !== newFriendDocID
      })
      let sentFriendRequest = newFriendData.friendRequests.sent
      sentFriendRequest = sentFriendRequest.filter((request) => {
        return request.userId !== currentUserDocId
      })
      await updateDoc(currentUserDocRef, {
        "friendRequests.recieved": recievedFriendRequest
      })
      await updateDoc(newFriendDocRef, {
        "friendRequests.sent": sentFriendRequest
      })
    }
    /* 
    */
  } catch (error) {
    console.log(error);
  } finally {
    alert("solicitud rechazada");
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
