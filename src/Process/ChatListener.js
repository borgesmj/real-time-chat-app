import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "./Firebase";

export const chatListener = (currentUser, setChatsList) => {
  if (!currentUser) {
    return;
  }
  const chatsRef = collection(db, "chats");
  const q = query(
    chatsRef,
    where("participants", "array-contains", currentUser.username)
  );
  const unsubscribe = onSnapshot(q, (snapshot) => {
    const chats = [];
    snapshot.forEach((doc) => {
      chats.push(doc.data());
    });
    setChatsList(chats);
  });
  return unsubscribe;
};
