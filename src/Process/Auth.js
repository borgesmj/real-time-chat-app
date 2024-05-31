import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "./Firebase"

export const logIn = (email, password) => {
    const results = signInWithEmailAndPassword(
        auth,
        email,
        password
    )
    return results
}

export const LogOut = () => {
    window.localStorage.removeItem("userUID")
}