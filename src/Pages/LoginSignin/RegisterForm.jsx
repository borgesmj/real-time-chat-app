const RegisterForm = () => {
  return (
    <form id="register" className="w-full bg-transparent text-white p-4 rounded-lg flex flex-col justify-between ">
      <h2 className="text-[2rem]  text-center underline">Registrarse</h2>
      <p className="campo w-full relative border-solid border-[1px] border-black h-8 my-4  rounded-lg">
        <input type="text" className="focus:outline-none h-full" id="email" placeholder=" " />
        <label htmlFor="email" className="h-full">Username:</label>
      </p>
      <p className="campo w-full relative border-solid border-[1px] border-black h-8 my-4  rounded-lg">
        <input type="text" className="focus:outline-none  h-full" id="email" placeholder=" " />
        <label htmlFor="email">Email:</label>
      </p>
      <p className="campo w-full  relative border-solid border-[1px] border-black h-8 my-4 rounded-lg">
        <input type="password" className="outline-none h-full" id="password" placeholder=" " />
        <label htmlFor="password" id="password">Contraseña:</label>
      </p>
      <p className="campo w-full relative border-solid border-[1px] border-black h-8 my-4  rounded-lg">
        <input type="password" className="outline-none h-full" id="password" placeholder=" " />
        <label htmlFor="password" id="password">Confirme la contraseña:</label>
      </p>
      <p className="campo my-4 w-full h-4 flex justify-center items-center">
        <button type="submit" className="py-2 px-5 border-none rounded-[5px] bg-[#007bff] text-white cursor-pointer transition-[background] hover:bg-[#0056b3]">Registrase</button>
      </p>
      <span className="text-xs w-full text-center block">
        Si ya tienes una cuenta, puedes{" "}
        <label htmlFor="login-cb" className="font-bold underline">iniciar sesión</label>
      </span>
    </form>
  )
}

export default RegisterForm
