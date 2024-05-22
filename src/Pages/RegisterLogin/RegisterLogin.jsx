import { useState } from "react";
import FormHeader from "../../Components/FormHeader/FormHeader";
import LoginForm from "../../Components/LoginForm/LoginForm";
import RegisterForm from "../../Components/RegisterForm/RegisterForm";
// Toastyfy
import { ToastContainer, toast, Bounce } from "react-toastify";

const RegisterLogin = () => {
  const [registerOpen, setRegisterOpen] = useState(false);

  const openToastSuccess = () => {
    toast.success("Usuario creado con exito", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const openToastError = (message) => {
    toast.error(message, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  return (
    <div className="bg-transparent w-dvw h-dvh flex justify-around items-center flex-col md:relative">
      <div className="w-[120px] h-[120px] bg-red-400 md:absolute md:top-1/4 md:left-1/4 md:w-[180px] md:h-[180px] 2xl:w-[250px] 2xl:h-[250px]">Aqui va un logo</div>
      <div className="bg-gray-600 h-[70%] w-[90%] rounded-xl md:absolute md:bottom-4 md:right-4 md:w-[450px] md:h-[450px] 2xl:w-[700px] 2xl:h-[700px] 2xl:bottom-40 2xl:right-40">
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
        />
        <RegisterForm
          id="RegisterForm"
          btnText="Registrar"
          setRegisterOpen={setRegisterOpen}
          openToastError={openToastError}
          openToastSuccess={openToastSuccess}
        />
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
      </div>
    </div>
  );
};

export default RegisterLogin;
