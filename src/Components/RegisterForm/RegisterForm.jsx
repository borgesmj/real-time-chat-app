import { useEffect, useState } from "react";
// componentes y plantillas
import FormTemplate from "../../Templates/FormTemplate";
import SubmitBtn from "../SubmitBtn/SubmitBtn";
import FormField from "../FormField/FormField";
// Iconos
import { At, User, Lock } from "@phosphor-icons/react";
// FIrebase
import { auth, db } from "../../Process/Firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, getDocs, addDoc } from "firebase/firestore";
const RegisterForm = ({
  id,
  btnText,
  setRegisterOpen,
  openToastSuccess,
  openToastError,
}) => {
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [allUsersList, setAllUserList] = useState([]);

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

  const handleSubmit = async () => {
    if (passwordStrength < 3) {
      openToastError(
        <>
          La contraseña es muy débil
          <br />
          Debe tener:
          <br />
          * Al menos 8 caracteres
          <br />
          * 1 carácter en mayúscula
          <br />
          * 1 carácter numérico
          <br />* 1 carácter especial (.*/?&$+)
        </>
      );
      return;
    } else if (newPassword !== repeatPassword) {
      openToastError("Las contraseñas deben coincidir");
      return;
    }
    try {
      setCreatingUser(true);
      const results = await createUserWithEmailAndPassword(
        auth,
        email,
        newPassword
      );
      await updateProfile(results.user, {
        displayName: username,
      });
      try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Miguel",
          last: "Borges",
          born: 1991,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      setUsername("");
      setNewPassword("");
      setRepeatPassword("");
      setEmail("");
      openToastSuccess();
      setTimeout(() => {
        setRegisterOpen(false);
        setCreatingUser(false);
      }, 3000);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setCreatingUser(false);
        openToastError("Este correo ya esta en uso");
      } else if (error.code === "auth/invalid-email") {
        setCreatingUser(false);
        openToastError("El correo no es valido");
      } else if (error.code) {
        setCreatingUser(false);
        openToastError("Ups! Algo salió mal.");
      }
      console.log(error.code);
    }
  };
  return (
    <FormTemplate id={id}>
      <FormField>
        <div className="bg-[#1a5cf1] w-3/4 flex flex-row px-4 py-2 rounded-[10px]">
          <span>
            <User size={32} />
          </span>
          <input
            type="text"
            name=""
            id="username"
            className="bg-transparent focus:outline-none ml-4"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </FormField>
      <FormField>
        <div className="bg-[#1a5cf1] w-3/4 flex flex-row px-4 py-2 rounded-[10px]">
          <span>
            <At size={32} />
          </span>
          <input
            type="text"
            name="register-email"
            id="register-email"
            className="bg-transparent focus:outline-none ml-4"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </FormField>
      <FormField>
        <div className="bg-[#1a5cf1] w-3/4 flex flex-row px-4 py-2 rounded-[10px]">
          <span>
            <Lock size={32} />
          </span>
          <input
            type="password"
            name=""
            id="register-password"
            className="bg-transparent focus:outline-none ml-4"
            placeholder="Contraseña"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
            required
          />
        </div>
      </FormField>
      <FormField>
        <div className="bg-[#1a5cf1] w-3/4 flex flex-row px-4 py-2 rounded-[10px]">
          <span>
            <Lock size={32} />
          </span>
          <input
            type="password"
            name=""
            id="register-newPassword"
            className="bg-transparent focus:outline-none ml-4"
            placeholder="Repita su contraseña"
            required
            value={repeatPassword}
            onChange={(e) => {
              setRepeatPassword(e.target.value);
            }}
          />
        </div>
      </FormField>
      <FormField>
        <SubmitBtn
          btnText={!creatingUser ? btnText : "Registrando"}
          handleSubmit={handleSubmit}
        />
        <p className="ml-8 font-bold text-[#2a288f] cursor-pointer underline ">
          o{" "}
          <span
            onClick={() => {
              setRegisterOpen(false);
            }}
          >
            iniciar sesión
          </span>
        </p>
      </FormField>
    </FormTemplate>
  );
};

export default RegisterForm;
