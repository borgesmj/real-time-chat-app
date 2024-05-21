const FormTemplate = ({children, id}) => {
  return (
    <form id={id}>
      {children}
    </form>
  )
}

export default FormTemplate
