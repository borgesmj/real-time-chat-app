import FormTemplate from "../../Templates/FormTemplate";
import FormField from "../FormField/FormField";
import SubmitBtn from "../SubmitBtn/SubmitBtn";

const LoginForm = ({ id, btnText }) => {
  return (
    <FormTemplate id={id}>
      <FormField>
        <SubmitBtn btnText={btnText} />
      </FormField>
    </FormTemplate>
  );
};

export default LoginForm;
