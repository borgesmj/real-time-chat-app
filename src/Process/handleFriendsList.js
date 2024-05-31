import { doc, updateDoc } from "firebase/firestore";
import { db } from "./Firebase";

export const addFriend = async (currentUserDocID, friendsList) => {
    try {
        await updateDoc(doc(db, "users", currentUserDocID), {
            friendsList: friendsList
        });
        return true; 
    } catch (error) {
        console.log(error);
        return false; 
    }
};
