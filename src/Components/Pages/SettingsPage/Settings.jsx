import React from "react";
import "./Settings.css";
import Section from "../../Section/Section";
import ThemeToggle from "../../Theme-toggle/ThemeToggle";
import { NavLink } from "react-router-dom";
import {Password, UserGear} from "@phosphor-icons/react";

const Settings = ({ darkTheme, setDarkTheme }) => {
  const handleChange = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div>
      <Section darkTheme={darkTheme}>
        <h3 className="w-full text-center text-[2rem] uppercase font-[roboto]">
          Settings
        </h3>
        <div>
          <NavLink to="profile" className="flex flex-row w-full px-6 py-4 justify-start my-4 items-center"><UserGear className="mx-4" size={32} />Perfil</NavLink>
          <NavLink to="password" className="flex flex-row w-full px-6 py-4 justify-start  my-4 items-center"><Password className="mx-4" size={32} />Contraseña</NavLink>
          <ThemeToggle darkTheme={darkTheme} handleChange={handleChange} />
        </div>
      </Section>
    </div>
  );
};

export default Settings;
