import FormTemplate from "../../Templates/FormTemplate";
import FormField from "../FormField/FormField";
import SubmitBtn from "../SubmitBtn/SubmitBtn";
import { At, Lock } from "@phosphor-icons/react";
import { auth, db } from "../../Process/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
// Toastyfy
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// firebase
import { collection, getDocs, query, where } from "firebase/firestore";
// React router dom
import { useNavigate } from 'react-router-dom';

const LoginForm = ({
  id,
  btnText,
  setRegisterOpen,
  openToastError,
  setLoading,
  setCurrentUser,
  openToastSuccess,
}) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPW, setLoginPW] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const lowercaseEmail = loginEmail.toLowerCase();
    setLoading(true);
    try {
      const results = await signInWithEmailAndPassword(
        auth,
        lowercaseEmail,
        loginPW
      );
      window.localStorage.setItem("userUID", results.user.uid)
      const fetchUserDataByUsername = async () => {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("email", "==", lowercaseEmail));
        const querySnapShot = await getDocs(q);
        const filteredUser = [];
        querySnapShot.forEach((doc) => {
          filteredUser.push(doc.data());
        });
        if (filteredUser.length > 0) {
          return filteredUser[0];
        } else {
          openToastError("Usuario no existe");
          return null;
        }
      };

      const userData = await fetchUserDataByUsername();
      if (userData) {
        setCurrentUser(userData);
        openToastSuccess('Validación Exitosa');
        navigate('/chats');
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      if (error.code === "auth/invalid-credential") {
        openToastError("Email y/o contraseña incorrecto");
      } else if (error.code === "auth/user-not-found") {
        openToastError("Usuario no existe");
      } else if (error.code === "auth/user-disabled") {
        openToastError("Usuario Inhabilitado");
      } else {
        openToastError("Ups!! Algo salió mal");
      }
    }
  };

  return (
    <FormTemplate id={id}>
      <FormField>
        <div className="bg-[#1a5cf1] w-3/4 flex flex-row px-4 py-2 rounded-[10px]">
          <span>
            <At size={32} />
          </span>
          <input
            type="text"
            name=""
            id="login-email"
            className="bg-transparent focus:outline-none ml-4"
            placeholder="Email"
            required
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
        </div>
      </FormField>
      <FormField>
        <div className="bg-[#1a5cf1] w-3/4 flex flex-row px-4 py-2 rounded-[10px]">
          <span>
            <Lock size={32} />
          </span>
          <input
            type="password"
            name=""
            id="login-password"
            className="bg-transparent focus:outline-none ml-4"
            placeholder="Password"
            required
            value={loginPW}
            onChange={(e) => setLoginPW(e.target.value)}
          />
        </div>
      </FormField>
      <FormField>
        <SubmitBtn btnText={btnText} handleSubmit={handleSubmit} />
        <p className="ml-8 font-bold text-[#2a288f] cursor-pointer underline ">
          o{" "}
          <span
            onClick={() => {
              setRegisterOpen(true);
            }}
          >
            registrarse
          </span>
        </p>
      </FormField>
      <a
        href=""
        className="w-full text-center font-bold text-[#2a288f] cursor-pointer underline"
      >
        Olvidé mi contraseña
      </a>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </FormTemplate>
  );
};

export default LoginForm;
