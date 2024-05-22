import { useState } from "react";
import FormHeader from "../../Components/FormHeader/FormHeader";
import LoginForm from "../../Components/LoginForm/LoginForm";
import RegisterForm from "../../Components/RegisterForm/RegisterForm";

const RegisterLogin = () => {
  const [registerOpen, setRegisterOpen] = useState(false);
  return (
    <div className="bg-transparent w-dvw h-dvh flex justify-around items-center flex-col">
      <div className="w-[120px] h-[120px] bg-red-400">Aqui va un logo</div>
      <div className="bg-gray-600 h-[70%] w-[90%] rounded-xl">
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
        <LoginForm id="LoginForm" btnText="Entrar"/>
        <RegisterForm id="RegisterForm" btnText="Registrar"/>
      </div>
    </div>
  );
};

export default RegisterLogin;
