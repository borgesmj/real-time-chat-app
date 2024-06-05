import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./Firebase";

// Funciones para agregar, rechazar, aceptar y cancelar solicitudes de amistad
// Reciben como parametro los id de cada usuario, que son los mismo id de los documentos
// extraen la informacion con respecto al documento
// y actualizan los datos en la base de datos
//
// Funcion para enviar una solicitud de amistad
export const addFriend = async (currentUserDocId, newFriendDocID) => {
  try {
    const currentUserDocRef = doc(db, "users", currentUserDocId);
    const newFriendDocRef = doc(db, "users", newFriendDocID);
    const currentUserDocSnap = await getDoc(currentUserDocRef);
    const newFriendDocSnap = await getDoc(newFriendDocRef);
    if (currentUserDocSnap.exists() && newFriendDocSnap.exists()) {
      const currentUSerData = await currentUserDocSnap.data();
      const newFriendData = await newFriendDocSnap.data();
      const sentFriendRequests = currentUSerData.friendRequests.sent;
      const recievedFriendRequests = newFriendData.friendRequests.recieved;
      sentFriendRequests.push({
        name: newFriendData.fullname,
        profilePic: newFriendData.profile_pic,
        userId: newFriendData.userId,
        username: newFriendData.username,
      });
      recievedFriendRequests.push({
        name: currentUSerData.fullname,
        profilePic: currentUSerData.profile_pic,
        userId: currentUSerData.userId,
        username: currentUSerData.username,
      });
      await updateDoc(currentUserDocRef, {
        "friendRequests.sent": sentFriendRequests,
      });
      await updateDoc(newFriendDocRef, {
        "friendRequests.recieved": recievedFriendRequests,
      });
      return true;
    }
  } catch (error) {
    console.log(error);
  } finally {
    alert("amigo agregado");
  }
};
// Funcion para rechazar la solicitud de amistad
export const rejectRequest = async (currentUserDocId, newFriendDocID) => {
  try {
    const currentUserDocRef = doc(db, "users", currentUserDocId);
    const newFriendDocRef = doc(db, "users", newFriendDocID);
    const currentUserDocSnap = await getDoc(currentUserDocRef);
    const newFriendDocSnap = await getDoc(newFriendDocRef);
    if (currentUserDocSnap.exists() && newFriendDocSnap.exists()) {
      const currentUSerData = await currentUserDocSnap.data();
      const newFriendData = await newFriendDocSnap.data();
      let recievedFriendRequest = currentUSerData.friendRequests.recieved;
      recievedFriendRequest = recievedFriendRequest.filter((request) => {
        return request.userId !== newFriendDocID;
      });
      let sentFriendRequest = newFriendData.friendRequests.sent;
      sentFriendRequest = sentFriendRequest.filter((request) => {
        return request.userId !== currentUserDocId;
      });
      await updateDoc(currentUserDocRef, {
        "friendRequests.recieved": recievedFriendRequest,
      });
      await updateDoc(newFriendDocRef, {
        "friendRequests.sent": sentFriendRequest,
      });
    }
    /*
     */
  } catch (error) {
    console.log(error);
  } finally {
    alert("solicitud rechazada");
  }
};
// funcion para aceptar la solicitud de amistad
export const acceptFriendRequest = async (currentUserDocId, newFriendDocID) => {
  try {
    const currentUserDocRef = doc(db, "users", currentUserDocId);
    const newFriendDocRef = doc(db, "users", newFriendDocID);
    const currentUserDocSnap = await getDoc(currentUserDocRef);
    const newFriendDocSnap = await getDoc(newFriendDocRef);
    if (currentUserDocSnap.exists() && newFriendDocSnap.exists()) {
      const currentUserData = await currentUserDocSnap.data();
      const newFriendData = await newFriendDocSnap.data();
      let recievedFriendRequest = currentUserData.friendRequests.recieved;
      recievedFriendRequest = recievedFriendRequest.filter((request) => {
        return request.userId !== newFriendDocID;
      });
      let sentFriendRequest = newFriendData.friendRequests.sent;
      sentFriendRequest = sentFriendRequest.filter((request) => {
        return request.userId !== currentUserDocId;
      });
      let currentUserFriendsList = currentUserData.friendsList;
      currentUserFriendsList.push({
        name: newFriendData.fullname,
        profilePic: newFriendData.profile_pic,
        userId: newFriendData.userId,
        username: newFriendData.username,
      });
      let newFriendFriendsList = newFriendData.friendsList;
      newFriendFriendsList.push({
        name: currentUserData.fullname,
        profilePic: currentUserData.profile_pic,
        userId: currentUserData.userId,
        username: currentUserData.username,
      });

      await updateDoc(currentUserDocRef, {
        "friendRequests.recieved": recievedFriendRequest,
        friendsList: currentUserFriendsList,
      });
      await updateDoc(newFriendDocRef, {
        "friendRequests.sent": sentFriendRequest,
        friendsList: newFriendFriendsList,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
// funcion para cancelar la solicitud de amistad
export const removeRequest = async (currentUserDocId, newFriendDocID) => {
  try {
    const currentUserDocRef = doc(db, "users", currentUserDocId);
    const newFriendDocRef = doc(db, "users", newFriendDocID);
    const currentUserDocSnap = await getDoc(currentUserDocRef);
    const newFriendDocSnap = await getDoc(newFriendDocRef);
    if (currentUserDocSnap.exists() && newFriendDocSnap.exists()) {
      const currentUserData = await currentUserDocSnap.data();
      const newFriendData = await newFriendDocSnap.data();
      let currentUserFriendRequest = currentUserData.friendRequests.sent;
      currentUserFriendRequest = currentUserFriendRequest.filter((request) => {
        return request.userId !== newFriendDocID;
      });
      let newFriendFriendRequest = newFriendData.friendRequests.recieved;
      newFriendFriendRequest = newFriendFriendRequest.filter((request) => {
        return request.userId !== currentUserDocId;
      });
      await updateDoc(currentUserDocRef, {
        "friendRequests.sent": currentUserFriendRequest,
      });
      await updateDoc(newFriendDocRef, {
        "friendRequests.recieved": newFriendFriendRequest,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// Funcion para eliminar amigos de la lista de amigos
export const deleteFriend = async (currentUserDocId, newFriendDocID) => {
  try {
    const currentUserDocRef = doc(db, "users", currentUserDocId);
    const newFriendDocRef = doc(db, "users", newFriendDocID);
    const currentUserDocSnap = await getDoc(currentUserDocRef);
    const newFriendDocSnap = await getDoc(newFriendDocRef);
    if (currentUserDocSnap.exists() && newFriendDocSnap.exists()) {
      const currentUserData = await currentUserDocSnap.data();
      const newFriendData = await newFriendDocSnap.data();
      let currentUserFriendList = await currentUserData.friendsList;
      currentUserFriendList = currentUserFriendList.filter((friend) => {
        return friend.userId !== newFriendDocID;
      });
      let newFriendFriendList = await newFriendData.friendsList;
      newFriendFriendList = newFriendFriendList.filter((friend) => {
        return friend.userId !== currentUserDocId;
      });
      await updateDoc(currentUserDocRef, {
        friendsList: currentUserFriendList,
      });
      await updateDoc(newFriendDocRef, {
        friendsList: newFriendFriendList,
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    alert("amigo eliminado");
  }
};
