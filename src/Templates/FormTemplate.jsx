const FormTemplate = ({children, id}) => {
  return (
    <form id={id} className="w-full flex flex-col items-center">
      {children}
    </form>
  )
}

export default FormTemplate
