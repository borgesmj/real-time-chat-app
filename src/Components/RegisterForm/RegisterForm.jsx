import FormTemplate from "../../Templates/FormTemplate"
import SubmitBtn from "../SubmitBtn/SubmitBtn"
const RegisterForm = ({id, btnText}) => {
  return (
    <FormTemplate id={id}>
      <SubmitBtn btnText={btnText}/>
    </FormTemplate>
  )
}

export default RegisterForm
