import FormTemplate from "../../Templates/FormTemplate";
import FormField from "../FormField/FormField";
import SubmitBtn from "../SubmitBtn/SubmitBtn";
import { At, Lock } from "@phosphor-icons/react";
import { useState } from "react";
// Toastyfy
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// React router dom
import { useNavigate } from 'react-router-dom';
// Process
import {logIn} from "../../Process/Auth.js"

const LoginForm = ({
  id,
  btnText,
  setRegisterOpen,
  openToastError,
  setLoading,
  darkTheme,
}) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPW, setLoginPW] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const lowercaseEmail = loginEmail.toLowerCase();
    setLoading(true);
    try {
      const results = await logIn(
        lowercaseEmail,
        loginPW
      );
      window.localStorage.setItem("userUID", results.user.uid)
      window.location.href = "/chats"
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
    } finally{
      setLoading(false)
      setLoginEmail("")
      setLoginPW("")
    }
  };

  return (
    <FormTemplate id={id}>
      <FormField>
        <div className="w-3/4 flex flex-row px-4 py-2 border-b-solid border-b-[2px] border-b-transparent focus-within:border-b-[var(--accent-100)]">
          <span>
            <At size={32}  color={darkTheme ? "#FFFFFF" : "#0b0a0a" } weight="bold" />
          </span>
          <input
            type="text"
            name=""
            id="login-email"
            className="bg-transparent focus:outline-none ml-4 w-3/4 text-[var(--text-200)] placeholder:text-[var(--text-200)] placeholder:text-bold"
            placeholder="Email"
            required
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
        </div>
      </FormField>
      <FormField>
      <div className="w-3/4 flex flex-row px-4 py-2 border-b-solid border-b-[2px] border-b-transparent focus-within:border-b-[var(--accent-100)]">
          <span>
            <Lock size={32}  color={darkTheme ? "#FFFFFF" : "#0b0a0a" } weight="bold" />
          </span>
          <input
            type="password"
            name=""
            id="login-password"
            className="bg-transparent focus:outline-none ml-4 w-3/4 text-[var(--text-200)] placeholder:text-[var(--text-200)] placeholder:text-bold"
            placeholder="Password"
            required
            value={loginPW}
            onChange={(e) => setLoginPW(e.target.value)}
          />
        </div>
      </FormField>
      <FormField>
        <SubmitBtn btnText={btnText} handleSubmit={handleSubmit} />
        <p className="ml-8 font-bold text-[var(--text-200)] cursor-pointer underline ">
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
        className="w-full text-center text-md text-[var(--text-200)] cursor-pointer underline"
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
