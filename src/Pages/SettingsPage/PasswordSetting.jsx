import Section from "../../Components/Section/Section";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowLeft, Lock, Eye, EyeSlash } from "@phosphor-icons/react";

const PasswordSetting = ({ darkTheme, setOpenPWSettings }) => {
  const [revealedPassword, setRevealedPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [strengthSpans, setStrengthSpans] = useState([]);

  useEffect(() => {
    const strength = evalNewPassword(newPassword);
    setPasswordError(evalRepeat());
    setStrengthSpans(Array(strength).fill("x"));
  }, [newPassword]);

  useEffect(() => {
    setPasswordError(evalRepeat());
  }, [confirmedPassword]);

  const evalRepeat = () => {
    if (newPassword !== confirmedPassword) {
      return true;
    } else {
      return false;
    }
  };
  const revealPassword = () => {
    setRevealedPassword(!revealedPassword);
  };
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

  return (
    <Section darkTheme={darkTheme}>
      <div className="flex flex-col w-full h-dvh">
        <button
          onClick={() => {
            setOpenPWSettings(false);
          }}
          className={`w-[50px] h-[50px] ml-[20px] mt-[20px] flex justify-center items-center rounded-full border-solid border-[1px] ${
            !darkTheme ? "border-[#917800]" : "border-[#dbffff]"
          }`}
        >
          <ArrowLeft size={32} />
        </button>
        <form
          className={`w-4/5 flex flex-col mt-5 items-center justify-center p-4 mx-auto ${
            !darkTheme ? "bg-[#dbffff]" : "bg-[#0A192F]"
          } rounded-lg`}
        >
          <h3 className="text-center text-[12px] md:text-[14px] xl:text-[17px]">
            Configura una nueva contraseña
          </h3>
          <div
            className={`p-2 m-2 border-solid border -[1px] ${
              !darkTheme ? "border-[#917800]" : "border-[#dbffff]"
            } rounded-[10px]`}
          >
            <Lock size={20} />
          </div>
          <span className="text-[8px] leading-[1] text-center">
            Debe ser, al menos, una contraseña de 8 caracteres. Debe incluir
            caracteres especiales .*/?&$+
          </span>
          <div className="w-full flex flex-col my-2 py-2">
            <label
              htmlFor="current-password"
              className="w-full text-left mb-2 ml-2 text-[12px]"
            >
              Contraseña Actual:
            </label>
            <p
              className={`w-full border-solid border-[1px] rounded-[10px] ${
                !darkTheme ? "border-[#917800]" : "border-[#dbffff]"
              } flex flex-row justify-around items-center hover:cursor-pointer  relative h-10`}
            >
              <input
                type={revealedPassword ? "text" : "password"}
                name="current-password"
                id="current-password"
                className={`bg-transparent p-2 outline-none ${
                  !darkTheme
                    ? "placeholder:text-[#5c5c5c]"
                    : "placeholder:text-[#e0e0e0]"
                } hover:cursor-pointer absolute left-0 top-0 bottom-0 h-full placeholder:text-xs`}
                placeholder="Introduzca contraseña"
              />
              <span
                onClick={revealPassword}
                className="absolute right-0 top-0 bottom-0 h-full flex items-center"
              >
                {!revealedPassword ? <Eye size={28} /> : <EyeSlash size={28} />}
              </span>
            </p>
          </div>
          <div className="w-full flex flex-col my-2">
            <label
              htmlFor="new-password"
              className="w-full text-left mb-2 ml-2 text-[12px]"
            >
              Nueva contraseña:
            </label>
            <p
              className={`w-full border-solid border-[1px] rounded-[10px] ${
                !darkTheme ? "border-[#917800]" : "border-[#dbffff]"
              } flex flex-row justify-around items-center hover:cursor-pointer  relative h-10`}
            >
              <input
                type={revealedPassword ? "text" : "password"}
                name="new-password"
                id="new-password"
                className={`bg-transparent p-2 outline-none ${
                  !darkTheme
                    ? "placeholder:text-[#5c5c5c]"
                    : "placeholder:text-[#e0e0e0]"
                } hover:cursor-pointer absolute left-0 top-0 bottom-0 h-full placeholder:text-xs`}
                placeholder="Introduzca contraseña"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <span
                onClick={revealPassword}
                className="absolute right-0 top-0 bottom-0 h-full flex items-center"
              >
                {!revealedPassword ? <Eye size={28} /> : <EyeSlash size={28} />}
              </span>
            </p>
            <div className=" w-full h-2 flex justify-start mt-1">
              {strengthSpans.map((span, index) => (
                <span
                  className={`w-1/4 h-full ${
                    strengthSpans.length < 3
                      ? "bg-[#FF0000]"
                      : strengthSpans.length < 4
                      ? "bg-[#fff23cf5]"
                      : "bg-[#00ff00]"
                  } rounded-xl`}
                  key={`span_${index}`}
                ></span>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col my-2">
            <label
              htmlFor="confirm-new-password"
              className="w-full text-left mb-2 ml-2 text-[12px]"
            >
              Confirma nueva contraseña:
            </label>
            <p
              className={`w-full   border-solid border-[1px] rounded-[10px] ${
                !darkTheme ? "border-[#917800]" : "border-[#dbffff]"
              } flex flex-row justify-around items-center hover:cursor-pointer relative h-10`}
            >
              <input
                type={revealedPassword ? "text" : "password"}
                name="confirm-new-password"
                id="confirm-new-password"
                className={`bg-transparent p-2 outline-none ${
                  !darkTheme
                    ? "placeholder:text-[#5c5c5c]"
                    : "placeholder:text-[#e0e0e0]"
                } hover:cursor-pointer absolute left-0 top-0 bottom-0 h-full placeholder:text-xs`}
                placeholder="Introduzca contraseña"
                value={confirmedPassword}
                onChange={(e) => {
                  setConfirmedPassword(e.target.value);
                }}
              />
              <span
                onClick={revealPassword}
                className="absolute right-0 top-0 bottom-0 h-full flex items-center"
              >
                {!revealedPassword ? <Eye size={28} /> : <EyeSlash size={28} />}
              </span>
            </p>
            <div className=" w-full h-2 flex justify-start mt-1">
              {passwordError && (
                <span className="text-xs text-center w-full font-bold text-[#ff0000] leading-[5px]">
                  Las contraseñas deben coincidir
                </span>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col my-2">
            <input
              type="submit"
              value="Cambiar contraseña"
              className={`relative flex justify-center items-center rouned-[5px] ${
                !darkTheme ? "bg-[#479ae0]" : "bg-[#3ce0bc]"
              } overflow-hidden cursor-pointer border-none h-[50px] rounded-[10px]`}
            />
          </div>
          <button
            onClick={() => {
              setOpenPWSettings(false);
            }}
            className="underline"
          >
            Cancelar
          </button>
        </form>
      </div>
    </Section>
  );
};

export default PasswordSetting;
