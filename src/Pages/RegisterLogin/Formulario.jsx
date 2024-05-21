import FormHeader from "../../Components/FormHeader/FormHeader"

const Formulario = ({children, className}) => {
  return (
    <form className={className}>
        {children}
    </form>
  )
}

export default Formulario
