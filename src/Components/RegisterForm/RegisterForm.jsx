import FormTemplate from "../../Templates/FormTemplate";
import SubmitBtn from "../SubmitBtn/SubmitBtn";
import FormField from "../FormField/FormField";
const RegisterForm = ({ id, btnText,setRegisterOpen }) => {
  return (
    <FormTemplate id={id}>
      <FormField>
        <SubmitBtn btnText={btnText} />
        <p className="ml-8 font-bold text-[#2a288f] cursor-pointer underline ">
          o{" "}
          <span
            onClick={() => {
              setRegisterOpen(false);
            }}
          >
            entrar
          </span>
        </p>
      </FormField>
    </FormTemplate>
  );
};

export default RegisterForm;
