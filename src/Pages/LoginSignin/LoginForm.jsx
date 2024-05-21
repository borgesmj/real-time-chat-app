const LoginForm = () => {
  return (
    <form id="login" className="w-full bg-transparent text-white p-4 rounded-lg">
      <h2 className="text-[2rem] text-center underline">Iniciar Sesión</h2>
      <p className="campo w-full relative border-solid border-[1px] border-black h-8 my-8 rounded-lg">
        <input type="text" className="focus:outline-none " id="email" placeholder=" " />
        <label htmlFor="email">Email:</label>
      </p>
      <p className="campo w-full relative border-solid border-[1px] border-black h-8 my-8 rounded-lg">
        <input type="password" className="outline-none" id="password" placeholder=" " />
        <label htmlFor="password" id="password">Contraseña:</label>
      </p>
      <p className="campo my-8 w-full flex justify-center items-center">
        <button type="submit" className="py-2 px-5 border-none rounded-[5px] bg-[#007bff] text-white cursor-pointer transition-[background] hover:bg-[#0056b3]">Iniciar Sesión</button>
      </p>
      <span className="text-xs w-full text-center block">
        Si no tienes una cuenta, puedes{" "}
        <label htmlFor="login-cb" className="font-bold underline">registrate</label>
      </span>
    </form>
  );
};

export default LoginForm;
