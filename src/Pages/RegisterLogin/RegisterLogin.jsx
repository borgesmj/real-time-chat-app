import { useState } from "react";
import FormHeader from "../../Components/FormHeader/FormHeader";
import LoginForm from "../../Components/LoginForm/LoginForm";
import RegisterForm from "../../Components/RegisterForm/RegisterForm";
import Loader from "../../Components/Loader/Loader";
// Toastyfy
import { ToastContainer, toast, Bounce } from "react-toastify";
import {Moon, Sun} from '@phosphor-icons/react'

const RegisterLogin = ({setCurrentUser, currentUser, darkTheme, setDarkTheme}) => {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loading, setLoading] = useState(false)

  const openToastSuccess = () => {
    const toastId = toast.success("Usuario registrado con éxito", {
      position: "bottom-right",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
    setTimeout(() => {
      toast.dismiss(toastId)
    }, 2000);
  };

  const openToastError = (message) => {
    const toastId  = toast.error(message, {
      position: "bottom-right",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
    setTimeout(() => {
      toast.dismiss(toastId)
    }, 2000);
  };

  return (
    <div className="bg-transparent w-dvw h-dvh flex justify-around items-center flex-col md:relative">
      {loading && <Loader/>}
      <div className="flex justify-center items-center w-[120px] h-[120px]bg-transparent md:absolute md:top-1/4 md:left-1/4 md:w-[250px] md:h-[250px] xl:w-[350px] xl:h-[350px] 2xl:w-[250px] 2xl:h-[250px]">
        <img src="/chatmob_logo.webp" alt="" className="w-full h-full" />
      </div>
      {/*
       */}
      <div className="flex flex-col justify-between items-center backdrop-blur-lg bg-[var(--transparent-bg)]  h-[450px] w-[90%] rounded-xl md:absolute md:bottom-4 md:right-4 md:w-[450px] md:h-[450px] lg:w-[400px] 2xl:w-[520px] 2xl:h-[520px]  2xl:bottom-40 2xl:right-40 shadow-[0px_0px_47px_5px_var(--form-shadow)]">
        <input
          type="checkbox"
          name="registerOpen"
          id="mainChxbox"
          readOnly
          checked={registerOpen}
          className="hidden"
        />
        <FormHeader
          registerOpen={registerOpen}
          setRegisterOpen={setRegisterOpen}
        />
        <LoginForm
          id="LoginForm"
          btnText="Entrar"
          setRegisterOpen={setRegisterOpen}
          openToastError={openToastError}
          setLoading = {setLoading}
          setCurrentUser = {setCurrentUser}
          currentUser={currentUser}
          openToastSuccess={openToastSuccess}
          darkTheme={darkTheme}
        />
        <RegisterForm
          id="RegisterForm"
          btnText="Registrar"
          setRegisterOpen={setRegisterOpen}
          openToastError={openToastError}
          openToastSuccess={openToastSuccess}
          setLoading = {setLoading}
          darkTheme={darkTheme}
        />
        <ToastContainer
          position="bottom-right"
          autoClose={false}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme="colored"
          transition={Bounce}
        />
      </div>
      <button className="fixed top-12 left-12 h-[40px] w-[40px] rounded-full bg-[#111] p-2 flex justify-center items-center border-solid border-[#fefefe] border-2 shadow-[4px_4px_0px_0px_#fefefe] active:shadow-[0px_0px_0px_0px_#fefefe] active:translate-x-2 active:translate-y-2" onClick={() => {setDarkTheme(!darkTheme)}}>
        <span>{
          darkTheme ? <Moon size={32} color="#ffffff" weight="fill"/> : <Sun size={32} color="#ffffff"  weight="fill"/>
          }</span>
      </button>
    </div>
  );
};

export default RegisterLogin;
