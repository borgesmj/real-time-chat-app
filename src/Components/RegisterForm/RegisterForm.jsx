import FormTemplate from "../../Templates/FormTemplate";
import SubmitBtn from "../SubmitBtn/SubmitBtn";
import FormField from "../FormField/FormField";
const RegisterForm = ({ id, btnText }) => {
  return (
    <FormTemplate id={id}>
      <FormField>
        <SubmitBtn btnText={btnText} />
      </FormField>
    </FormTemplate>
  );
};

export default RegisterForm;
