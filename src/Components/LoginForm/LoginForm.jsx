import FormTemplate from "../../Templates/FormTemplate";
import FormField from "../FormField/FormField";
import SubmitBtn from "../SubmitBtn/SubmitBtn";
import { At, Lock } from "@phosphor-icons/react";

const LoginForm = ({ id, btnText, setRegisterOpen }) => {
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
            id=""
            className="bg-transparent focus:outline-none ml-4"
            placeholder="Email"
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
            id=""
            className="bg-transparent focus:outline-none ml-4"
            placeholder="Password"
          />
        </div>
      </FormField>
      <FormField>
        <SubmitBtn btnText={btnText} />
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
    </FormTemplate>
  );
};

export default LoginForm;
