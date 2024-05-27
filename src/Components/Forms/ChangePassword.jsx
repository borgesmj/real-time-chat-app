import FormTemplate from "../../Templates/FormTemplate";
import FormField from "../FormField/FormField";
import { Password } from "@phosphor-icons/react";
import SubmitBtn from "../SubmitBtn/SubmitBtn";
import { auth } from "../../Process/Firebase";
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword, updatePassword } from "firebase/auth";
import Loader from "../Loader/Loader";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [loading, setLoading] = useState(false);

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
        alert("Contraseña incorrecta");
        return;
      } else if (error.code === "auth/user-not-found") {
        alert("Usuario no existe");
        return;
      } else if (error.code === "auth/user-disabled") {
        alert("Usuario Inhabilitado");
        return;
      } else {
        alert("Ups!! Algo salió mal");
        return null;
      }
    }
  };

  const handleSubmit = async () => {
    if (newPassword !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    } else if (passwordStrength < 3) {
      alert("La contraseña no cumple con los requisitos");
      return;
    }
    const user = await loginWithEmail();
    if (user) {
      setLoading(true);
      const currentUser = auth.currentUser;
      try {
        await updatePassword(currentUser, newPassword);
      } catch (error) {
        alert("Ups!! Algo salió mal");
      } finally {
        setTimeout(() => {
          setPassword("");
          setNewPassword("");
          setConfirmPassword("");
          setLoading(false);
          alert("Contraseña Actualizada");
        }, 2000);
      }
    } else {
      return;
    }
  };

  return (
    <div className="w-full md:w-[300px] h-fit absolute top-12 md:top-20 bottom-12 bg-blue-500 flex flex-col overflow-y-auto py-10 mt-10">
      {loading && <Loader />}
      <FormTemplate>
        <FormField>
          <div className="bg-[#1a5cf1] w-3/4 flex flex-row px-4 py-2 rounded-[10px]">
            <span>
              <Password />
            </span>
            <input
              type="password"
              name=""
              id=""
              className="bg-transparent focus:outline-none ml-4"
              placeholder="Contraseña Actual"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </FormField>
        <FormField>
          <div className="bg-[#1a5cf1] w-3/4 flex flex-row px-4 py-2 rounded-[10px]">
            <span>
              <Password />
            </span>
            <input
              type="password"
              name=""
              id=""
              className="bg-transparent focus:outline-none ml-4"
              placeholder="Nueva contraseña"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            />
          </div>
        </FormField>
        <FormField>
          <div className="bg-[#1a5cf1] w-3/4 flex flex-row px-4 py-2 rounded-[10px]">
            <span>
              <Password />
            </span>
            <input
              type="password"
              name=""
              id=""
              className="bg-transparent focus:outline-none ml-4"
              placeholder="Repita su contraseña"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>
        </FormField>
        <FormField>
          <SubmitBtn btnText="Guardar" handleSubmit={handleSubmit} />
        </FormField>
      </FormTemplate>
    </div>
  );
};

export default ChangePassword;
