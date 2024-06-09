import FormTemplate from "../../Templates/FormTemplate";
import FormField from "../FormField/FormField";
import { Password } from "@phosphor-icons/react";
import SubmitBtn from "../SubmitBtn/SubmitBtn";
import { auth } from "../../Process/Firebase";
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword, updatePassword } from "firebase/auth";
import Loader from "../Loader/Loader";

const ChangePassword = ({ openToastError, openToastSuccess, darkTheme }) => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [btnIsActive, setBtnIsActive] = useState(false);
  const [userLoading, setUserLoading] = useState(false);

  useEffect(() => {
    if (password && newPassword && confirmPassword) {
      setBtnIsActive(true);
    } else {
      setBtnIsActive(false);
    }
  });

  useEffect(() => {
    let strength = evalNewPassword(newPassword);
    setPasswordStrength(strength);
  }, [newPassword]);

  const evalNewPassword = () => {
    let strength = 0;
    // Evaluar la longitud
    if (newPassword.length >= 8) strength++;
    // Evaluar mayuscular
    if (/[A-Z]/.test(newPassword)) strength++;
    // Evaluar digitos numericos
    if (/\d/.test(newPassword)) strength++;
    // Evalua caracteres especiales
    if (/[.*/?&$+]/.test(newPassword)) strength++;
    return strength;
  };

  const loginWithEmail = async () => {
    const email = auth.currentUser.email;
    try {
      const results = await signInWithEmailAndPassword(auth, email, password);
      return results;
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        openToastError("Contraseña incorrecta");
        return null;
      } else if (error.code === "auth/user-disabled") {
        openToastError("Usuario Inhabilitado");
        return null;
      } else {
        openToastError("Ups!! Algo salió mal");
        return null;
      }
    }
  };

  const handleSubmit = async () => {
    setUserLoading(true);
    if (newPassword !== confirmPassword) {
      setUserLoading(false);
      openToastError("Las contraseñas no coinciden");
      return;
    } else if (passwordStrength < 3) {
      setUserLoading(false);

      openToastError("La contraseña no cumple con los requisitos");
      return;
    }
    const user = await loginWithEmail();
    if (user) {
      const currentUser = auth.currentUser;
      try {
        await updatePassword(currentUser, newPassword);
      } catch (error) {
        openToastError("Ups!! Algo salió mal");
      } finally {
        setTimeout(() => {
          setUserLoading(false);
          setPassword("");
          setNewPassword("");
          setConfirmPassword("");
          openToastSuccess("Contraseña Actualizada");
        }, 2000);
      }
    } else {
      return;
    }
  };

  return (
    <div className="w-full md:w-[300px] h-fit absolute top-12 md:top-20 bottom-12 bg-[var(--primary-100)]  flex flex-col overflow-y-auto py-10 mt-10">
      <FormTemplate>
        <FormField>
          <div className="w-3/4 flex flex-row px-4 py-2 border-b-solid border-b-[2px] border-b-transparent focus-within:border-b-[var(--accent-100)]">
            <span>
              <Password
                size={32}
                color={darkTheme ? "#FFFFFF" : "#0b0a0a"}
                weight="bold"
              />
            </span>
            <input
              type="password"
              name=""
              id=""
              className="bg-transparent focus:outline-none ml-4 w-3/4 text-[var(--text-200)] placeholder:text-[var(--text-200)] placeholder:text-bold"
              placeholder="Contraseña Actual"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </FormField>
        <FormField>
          <div className="w-3/4 flex flex-row px-4 py-2 border-b-solid border-b-[2px] border-b-transparent focus-within:border-b-[var(--accent-100)]">
            <span>
              <Password
                size={32}
                color={darkTheme ? "#FFFFFF" : "#0b0a0a"}
                weight="bold"
              />
            </span>
            <input
              type="password"
              name=""
              id=""
              className="bg-transparent focus:outline-none ml-4 w-3/4 text-[var(--text-200)] placeholder:text-[var(--text-200)] placeholder:text-bold"
              placeholder="Nueva contraseña"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            />
          </div>
        </FormField>
        <FormField>
          <div className="w-3/4 flex flex-row px-4 py-2 border-b-solid border-b-[2px] border-b-transparent focus-within:border-b-[var(--accent-100)]">
            <span>
              <Password
                size={32}
                color={darkTheme ? "#FFFFFF" : "#0b0a0a"}
                weight="bold"
              />
            </span>
            <input
              type="password"
              name=""
              id=""
              className="bg-transparent focus:outline-none ml-4 w-3/4 text-[var(--text-200)] placeholder:text-[var(--text-200)] placeholder:text-bold"
              placeholder="Repita su contraseña"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>
        </FormField>
        <FormField>
          <SubmitBtn
            btnText="Guardar"
            handleSubmit={handleSubmit}
            btnIsActive={btnIsActive}
            userLoading={userLoading}
          />
        </FormField>
      </FormTemplate>
    </div>
  );
};

export default ChangePassword;
