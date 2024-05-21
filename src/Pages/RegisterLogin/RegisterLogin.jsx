import { useState } from "react";
import Formulario from "./Formulario";
import FormHeader from "../../Components/FormHeader/FormHeader";

const RegisterLogin = () => {
  const [registerOpen, setRegisterOpen] = useState(false);
  return (
    <div className="bg-transparent w-dvw h-dvh flex justify-center items-center flex-col">
      <div className="bg-gray-600 h-[90%] w-[90%] rounded-xl">
        <input
          type="checkbox"
          name="registerOpen"
          id=""
          readOnly
          checked={registerOpen}
          className="hidden"
        />
        <FormHeader
          registerOpen={registerOpen}
          setRegisterOpen={setRegisterOpen}
        />
        <Formulario className="login" />
        <Formulario className="register" />
      </div>
    </div>
  );
};

export default RegisterLogin;
