import Section from "../../Section/Section";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowLeft, Lock, Eye,EyeSlash  } from "@phosphor-icons/react";

const PasswordSetting = ({ darkTheme }) => {
  const [revealedPassword, setRevealedPassword] = useState(false)

  const revealPassword = () => {
      setRevealedPassword(!revealedPassword)
  }
  const evalRegex = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const evalRepeat = () => {
    console.log("repeat");
  };
  return (
    <Section darkTheme={darkTheme}>
      <div className="flex flex-col w-full h-dvh">
        <NavLink
          to="/settings"
          className={`w-[50px] h-[50px] ml-[20px] mt-[20px] flex justify-center items-center rounded-full border-solid border-[1px] ${
            !darkTheme ? "border-[#917800]" : "border-[#dbffff]"
          }`}
        >
          <ArrowLeft size={32} />
        </NavLink>
        <form
          className={`w-4/5 flex flex-col mt-5 items-center justify-center p-4 mx-auto ${
            !darkTheme ? "bg-[#dbffff]" : "bg-[#0A192F]"
          } rounded-lg`}
        >
          <h3 className="text-center">Configura una nueva contraseña</h3>
          <div
            className={`p-2 m-2 border-solid border -[1px] ${
              !darkTheme ? "border-[#917800]" : "border-[#dbffff]"
            } rounded-[10px]`}
          >
            <Lock size={32} />
          </div>
          <span className="text-xs text-center">
            Debe ser, al menos, una contraseña de 8 caracteres. Debe incluir
            caracteres especiales */+?
          </span>
          <div className="w-full flex flex-col my-2 py-2">
            <label
              htmlFor="current-password"
              className="w-full text-left mb-2 ml-2"
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
                } hover:cursor-pointer absolute left-0 top-0 bottom-0 h-full`}
                placeholder="Introduzca contraseña"
              />
              <span onClick={revealPassword} className="absolute right-0 top-0 bottom-0 h-full flex items-center">
              {!revealedPassword ? <Eye size={28} /> : <EyeSlash size={28} />}
              </span>
            </p>
          </div>
          <div className="w-full flex flex-col my-2 py-2">
            <label
              htmlFor="new-password"
              className="w-full text-left mb-2 ml-2"
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
                } hover:cursor-pointer absolute left-0 top-0 bottom-0 h-full`}
                placeholder="Introduzca contraseña"
              />
              <span onClick={revealPassword} className="absolute right-0 top-0 bottom-0 h-full flex items-center">
              {!revealedPassword ? <Eye size={28} /> : <EyeSlash size={28} />}
              </span>
            </p>
          </div>
          <div className="w-full flex flex-col my-2 py-2">
            <label
              htmlFor="confirm-new-password"
              className="w-full text-left mb-2 ml-2"
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
                } hover:cursor-pointer absolute left-0 top-0 bottom-0 h-full`}
                placeholder="Introduzca contraseña"
              />
              <span onClick={revealPassword} className="absolute right-0 top-0 bottom-0 h-full flex items-center">
              {!revealedPassword ? <Eye size={28} /> : <EyeSlash size={28} />}
              </span>
            </p>
          </div>
          <div className="w-full flex flex-col my-2 py-2">
            <input type="submit" value="Cambiar contraseña" className={`relative flex justify-center items-center rouned-[5px] ${!darkTheme ? 'bg-[#479ae0]' : 'bg-[#3ce0bc]'} overflow-hidden cursor-pointer border-none h-[50px] rounded-[10px]`} />
          </div>
          <NavLink to="/settings" className="underline">Cancelar</NavLink>
        </form>
      </div>
    </Section>
  );
};

export default PasswordSetting;
