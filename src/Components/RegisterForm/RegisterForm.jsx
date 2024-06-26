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
import { collection, getDocs, addDoc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
const RegisterForm = ({
  id,
  btnText,
  setRegisterOpen,
  openToastSuccess,
  openToastError,
  darkTheme,
}) => {
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [allUsersList, setAllUserList] = useState([]);
  const [btnIsActive, setBtnIsActive] = useState(false);
  const [userLoading, setUserLoading] = useState(false);

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

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapShot = await getDocs(collection(db, "users"));
        const userList = [];
        querySnapShot.forEach((doc) => {
          userList.push(doc.data().username);
        });
        setAllUserList(userList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    if (repeatPassword && newPassword && username && email) {
      setBtnIsActive(true);
    } else {
      setBtnIsActive(false);
    }
  }, [email, username, newPassword, repeatPassword]);
  const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    return usernameRegex.test(username);
  };

  const handleSubmit = async () => {
    setUserLoading(true);
    const registerUsername = username.toLowerCase().trim();
    const registerEmail = email.toLocaleLowerCase().trim();
    if (!validateUsername(registerUsername)) {
      openToastError(
        <>
          El nombre de usuario no es válido
          <br />
          Solo puede contener letras, numeros y _
        </>
      );
      setUserLoading(false);
      return;
    } else if (allUsersList.includes(username)) {
      openToastError(
        <>
          Ese nombre de usuario ya está en uso
          <br />
          Intente con uno distinto
        </>
      );
      setUserLoading(false);
      return;
    } else if (passwordStrength < 3) {
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
      setUserLoading(false);
      return;
    } else if (newPassword !== repeatPassword) {
      openToastError("Las contraseñas deben coincidir");
      setUserLoading(false);
      return;
    }
    try {
      // Paso 1: registrar un uaurio nuevo a firebase/auth
      const results = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        newPassword
      );
      // Paso 2: actualizar el nombre de usuario en firebase/auth
      await updateProfile(results.user, {
        displayName: registerUsername,
      });
      // Paso 3: crear un usuario en firebse/firestore
      const userDocRef = await addDoc(collection(db, "users"), {
        userId: "",
        username: registerUsername,
        fullname: "",
        profile_pic: "/default-pfp.png",
        email: registerEmail,
        bio: "",
        rrssUsernames: {
          twitter: "",
          instagram: "",
          tiktok: "",
          facebook: "",
        },
        location: "",
        dateOfBirth: "",
        friendsList: [],
        friendRequests: {
          sent: [],
          recieved: [],
        },
        interests: [],
        active: false,
        createAt: results.user.metadata.createdAt,
        userUID: results.user.uid,
      });
      // Paso 4: actualizamos el UID del usuario en firebase/firestore
      await updateDoc(userDocRef, { userId: userDocRef.id });
      // Paso 5: creamos un documento de chats para el mismo usuario
      // que funcionará para un chat de mensajes guardados
      const chatsDocRef = await addDoc(collection(db, "chats"), {
        participants: [registerUsername, registerUsername],
        createdAt: new Date(),
        lastMessage: {},
        messages: [],
        chatId: "",
      });
      // PAso 6: establecemos un campo con el id del chat
      await updateDoc(chatsDocRef, {
        chatId: chatsDocRef.id,
      });
      setUsername("");
      setNewPassword("");
      setRepeatPassword("");
      setEmail("");
      openToastSuccess();
      setTimeout(() => {
        setRegisterOpen(false);
        setUserLoading(false);
      }, 3000);
    } catch (error) {
      console.error("Error adding document: ", e);
      if (error.code === "auth/email-already-in-use") {
        openToastError("Este correo ya esta en uso");
        setUserLoading(false);
      } else if (error.code === "auth/invalid-email") {
        openToastError("El correo no es valido");
        setUserLoading(false);
      } else if (error.code) {
        openToastError("Ups! Algo salió mal.");
        setUserLoading(false);
      }
    }
  };
  return (
    <FormTemplate id={id}>
      <FormField>
        <div className="w-3/4 flex flex-row px-4 py-2 border-b-solid border-b-[2px] border-b-transparent focus-within:border-b-[var(--accent-100)]">
          <span>
            <User
              size={32}
              color={darkTheme ? "#FFFFFF" : "#0b0a0a"}
              weight="bold"
            />
          </span>
          <input
            type="text"
            name=""
            id="username"
            className="bg-transparent focus:outline-none ml-4 w-3/4 text-[var(--text-200)] placeholder:text-[var(--text-200)] placeholder:text-bold"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </FormField>
      <FormField>
        <div className="w-3/4 flex flex-row px-4 py-2 border-b-solid border-b-[2px] border-b-transparent focus-within:border-b-[var(--accent-100)]">
          <span>
            <At
              size={32}
              color={darkTheme ? "#FFFFFF" : "#0b0a0a"}
              weight="bold"
            />
          </span>
          <input
            type="text"
            name="register-email"
            id="register-email"
            className="bg-transparent focus:outline-none ml-4 w-3/4 text-[var(--text-200)] placeholder:text-[var(--text-200)] placeholder:text-bold"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </FormField>
      <FormField>
        <div className="w-3/4 flex flex-row px-4 py-2 border-b-solid border-b-[2px] border-b-transparent focus-within:border-b-[var(--accent-100)]">
          <span>
            <Lock
              size={32}
              color={darkTheme ? "#FFFFFF" : "#0b0a0a"}
              weight="bold"
            />
          </span>
          <input
            type="password"
            name=""
            id="register-password"
            className="bg-transparent focus:outline-none ml-4 w-3/4 text-[var(--text-200)] placeholder:text-[var(--text-200)] placeholder:text-bold"
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
        <div className="w-3/4 flex flex-row px-4 py-2 border-b-solid border-b-[2px] border-b-transparent focus-within:border-b-[var(--accent-100)]">
          <span>
            <Lock
              size={32}
              color={darkTheme ? "#FFFFFF" : "#0b0a0a"}
              weight="bold"
            />
          </span>
          <input
            type="password"
            name=""
            id="register-newPassword"
            className="bg-transparent focus:outline-none ml-4 w-3/4 text-[var(--text-200)] placeholder:text-[var(--text-200)] placeholder:text-bold"
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
          btnText={btnText}
          handleSubmit={handleSubmit}
          btnIsActive={btnIsActive}
          userLoading={userLoading}
        />
        <p className="ml-8 font-bold text-[var(--text-200)] cursor-pointer underline ">
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
