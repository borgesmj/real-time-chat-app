import React, { useState } from "react";
import "./Settings.css";
import Section from "../../Components/Section/Section";
import ThemeToggle from "../../Components/Theme-toggle/ThemeToggle";
import { NavLink } from "react-router-dom";
import { Password, UserGear, GearSix } from "@phosphor-icons/react";
import PageTemplate from "../../Templates/PageTemplate";
import SettingsSection from "../../Components/SettingsSection/SettingsSection";

const Settings = ({
  setDarkTheme,
  darkTheme,
  setSidebarOpen,
  sidebarOpen,
  currentUser,
  setModalIsOpen,
}) => {
  const handleChange = () => {
    setDarkTheme(!darkTheme);
  };

  const [openPWSettings, setOpenPWSettings] = useState(false);
  const [openProfileSettings, setOpenProfileSettings] = useState(false);
  const [openSettingsSection, setOpenSettingsSection] = useState(false)

  const handleOpenPasswordSettings = () => {
    setOpenSettingsSection(true)
  };

  return (
    <PageTemplate
      darkTheme={darkTheme}
      setDarkTheme={setDarkTheme}
      setSidebarOpen={setSidebarOpen}
      sidebarOpen={sidebarOpen}
      currentUser={currentUser}
      setModalIsOpen={setModalIsOpen}
    >
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
              className="w-full flex flex-row ml-4 text-xl items-center"
            >
              <UserGear /> <span className="ml-4">Perfil</span>
            </button>
            <ThemeToggle darkTheme={darkTheme} handleChange={handleChange} />
          </div>
        </Section>
        <input type="checkbox" name="" id="settings-chbx" checked={openSettingsSection} readOnly />
        <SettingsSection></SettingsSection>
    </PageTemplate>
  );
};

export default Settings;
