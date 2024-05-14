import React, { useState } from "react";
import "./Settings.css";
import Section from "../../Components/Section/Section";
import ThemeToggle from "../../Components/Theme-toggle/ThemeToggle";
import { NavLink } from "react-router-dom";
import { Password, UserGear, GearSix } from "@phosphor-icons/react";
import PasswordSetting from "./PasswordSetting";
import ProfileSettings from "./ProfileSettings";

const Settings = ({ darkTheme, setDarkTheme }) => {
  const handleChange = () => {
    setDarkTheme(!darkTheme);
  };

  const [openPWSettings, setOpenPWSettings] = useState(false);
  const [openProfileSettings, setOpenProfileSettings] = useState(false);

  const handleOpenPasswordSettings = () => {
    setOpenPWSettings(true);
  };

  return (
    <div className="h-[95dvh]">
      {openPWSettings ? (
        <PasswordSetting setOpenPWSettings={setOpenPWSettings} />
      ) : openProfileSettings ? (
        <ProfileSettings setOpenProfileSettings = {setOpenProfileSettings} />
      ) : (
        <Section darkTheme={darkTheme}>
          <h3 className="w-full flex justify-center text-[2rem] uppercase font-[roboto]">
            <GearSix size={52} weight="bold" />
          </h3>
          <div className="w-full flex flex-col justify-between h-40 mt-8">
            <button
              onClick={() => handleOpenPasswordSettings()}
              className="w-full flex flex-row ml-4 text-xl items-center"
            >
              <Password /> <span className="ml-4">Contraseña</span>
            </button>
            <button 
              onClick={() => setOpenProfileSettings(true)}
            className="w-full flex flex-row ml-4 text-xl items-center">
              <UserGear /> <span className="ml-4">Perfil</span>
            </button>
            <ThemeToggle darkTheme={darkTheme} handleChange={handleChange} />
          </div>
        </Section>
      )}
    </div>
  );
};

export default Settings;
