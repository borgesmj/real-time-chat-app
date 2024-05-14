import React from "react";
import "./Settings.css";
import Section from "../../Components/Section/Section";
import ThemeToggle from "../../Components/Theme-toggle/ThemeToggle";
import { NavLink } from "react-router-dom";
import {Password, UserGear} from "@phosphor-icons/react";

const Settings = ({ darkTheme, setDarkTheme }) => {
  const handleChange = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className="h-[95dvh]">
      <Section darkTheme={darkTheme}>
        <h3 className="w-full text-center text-[2rem] uppercase font-[roboto]">
          Configuraciones
        </h3>
        <div>
          <ThemeToggle darkTheme={darkTheme} handleChange={handleChange} />
        </div>
      </Section>
    </div>
  );
};

export default Settings;
