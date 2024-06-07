import React, { useState } from "react";
import "./Settings.css";
import Section from "../../Components/Section/Section";
import ThemeToggle from "../../Components/Theme-toggle/ThemeToggle";
import { NavLink } from "react-router-dom";
import { Password, UserGear, GearSix } from "@phosphor-icons/react";
import PageTemplate from "../../Templates/PageTemplate";
import SettingsSection from "../../Components/SettingsSection/SettingsSection";
import ChangePassword from "../../Components/Forms/ChangePassword";
import ChangeProfile from "../../Components/Forms/ChangeProfile";
// Toastyfy
import { ToastContainer, toast, Bounce } from "react-toastify";
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
    window.localStorage.setItem("darkTheme", !darkTheme)
  };
  const [openPWSettings, setOpenPWSettings] = useState(false);
  const [openProfileSettings, setOpenProfileSettings] = useState(false);
  const [openSettingsSection, setOpenSettingsSection] = useState(false);

  const handleOpenSettings = () => {
    setOpenSettingsSection(true);
  };

  const openToastSuccess = (message) => {
    const toastId = toast.success(message, {
      position: "bottom-right",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
    setTimeout(() => {
      toast.dismiss(toastId);
    }, 2000);
  };

  const openToastError = (message) => {
    const toastId = toast.error(message, {
      position: "bottom-right",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
    setTimeout(() => {
      toast.dismiss(toastId);
    }, 2000);
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
            onClick={() => {
              setOpenPWSettings(false);
              handleOpenSettings();
            }}
            className="w-full flex flex-row ml-4 text-xl items-center"
          >
            <UserGear /> <span className="ml-4">Perfil</span>
          </button>
          <button
            onClick={() => {
              setOpenPWSettings(true);
              handleOpenSettings();
            }}
            className="w-full flex flex-row ml-4 text-xl items-center"
          >
            <Password /> <span className="ml-4">Contraseña</span>
          </button>
          <ThemeToggle darkTheme={darkTheme} handleChange={handleChange} />
        </div>
      </Section>
      <input
        type="checkbox"
        name=""
        id="settings-chbx"
        checked={openSettingsSection}
        readOnly
        className="hidden"
      />
      <SettingsSection setOpenSettingsSection={setOpenSettingsSection}>
        {openPWSettings ? (
          <ChangePassword
            openToastError={openToastError}
            openToastSuccess={openToastSuccess}
          />
        ) : (
          <ChangeProfile
            currentUser={currentUser}
            openToastSuccess={openToastSuccess}
            openToastError={openToastError}
          />
        )}
      </SettingsSection>
      <ToastContainer
        position="bottom-right"
        autoClose={false}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
        transition={Bounce}
      />
    </PageTemplate>
  );
};

export default Settings;
