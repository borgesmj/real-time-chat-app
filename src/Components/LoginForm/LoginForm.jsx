import FormTemplate from "../../Templates/FormTemplate";
import FormField from "../FormField/FormField";
import SubmitBtn from "../SubmitBtn/SubmitBtn";
import { At, Lock } from "@phosphor-icons/react";
import {auth} from '../../Process/Firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
// Toastyfy
import { ToastContainer, toast, Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = ({ id, btnText, setRegisterOpen, openToastError }) => {

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPW, setLoginPW] = useState('')

  const handleSubmit = async () => {
    
    try{
      const results = await signInWithEmailAndPassword(auth, loginEmail, loginPW)
      console.log("login sucess")
      setLoginEmail('')
      setLoginPW('')
    } catch(error){
      console.log(error)
      if (error.code === "auth/invalid-credential"){
        openToastError('Email y/o contraseña incorrecto')
        return
      } else if (error.code === "mail is not defined" ){
        openToastError('Usuario no existe')
        return
      } else if (error.code === "auth/user-disabled"){
        openToastError("Usuario Inhabilitado")
      } else if (error.code){
        openToastError('Ups!! Algo salio mal')
      }
    }
  }

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
      <a href="" className="w-full text-center font-bold text-[#2a288f] cursor-pointer underline">Olvidé mi contraseña</a>
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
