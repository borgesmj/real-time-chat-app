import Section from "../../Section/Section";
import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";

const PasswordSetting = ({ darkTheme }) => {

  const evalRegex = (e) => {
    e.preventDefault()
    console.log(e.target.value)
  }

  const evalRepeat = () => {
    console.log('repeat')
  }
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
        <form className={`w-4/5 flex flex-col mt-5 items-center justify-center p-4 mx-auto ${!darkTheme ? 'bg-[#479ae0]' : 'bg-[#0A192F]'} rounded-lg`}>
          <div className="w-full flex flex-col my-2 py-2">
            <label htmlFor="current-password" className="w-full text-center mb-2">Contraseña Actual:</label>
            <input
              type="password"
              name="current-password"
              id="current-password"
              className={`${!darkTheme ? 'text-[#333333]' : 'text-[#1E88E5]'} px-2`}
            />
          </div>
          <div className="w-full flex flex-col my-2 py-2">
            <label htmlFor="new-password" className="w-full text-center mb-2">Nueva Contraseña:</label>
            <input
              type="password"
              name=""
              id="new-password"
              className={`${!darkTheme ? 'text-[#333333]' : 'text-[#1E88E5]'} px-2`}
              onChange={(e) => evalRegex(e)}
            />
          </div>
          <div className="w-full flex flex-col my-2 py-2">
            <label htmlFor="repeat-new-password" className="w-full text-center mb-2">
              Repita la nueva contraseña:
            </label>
            <input
              type="password"
              name="new-password"
              id="repeat-new-password"
              className={`${!darkTheme ? 'text-[#333333]' : 'text-[#1E88E5]'} px-2`}
            />
          </div>
        </form>
      </div>
    </Section>
  );
};

export default PasswordSetting;
