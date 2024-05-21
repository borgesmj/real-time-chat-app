import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
const LoginSignin = () => {
  return (
    <div className="flex flex-col w-[90dvw] items-center h-[75dvh] md:h-[450px] p-4 bg-gray-700 rounded-lg">
      <input type="checkbox" name="" id="login-cb" className="hidden" />
      <div className="cover hidden"></div>
      <LoginForm />
      <RegisterForm />
    </div>
  );
};

export default LoginSignin;
