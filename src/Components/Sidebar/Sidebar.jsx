import {
  User,
  UsersThree,
  HeartStraight,
  GearSix,
  EnvelopeSimple,
  List,
  SignOut,
  X,
} from "@phosphor-icons/react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = ({ darkTheme, sidebarOpen, openSidebar, setSidebarOpen }) => {
  const handleClick = () => {
    openSidebar();
  };

  const handleMouseEnter = () => {
    setSidebarOpen(true);
  };

  const handleMouseLeave = () => {
    setSidebarOpen(false);
  };
  return (
    <div
      className={`${
        !sidebarOpen
          ? "w-12 transition-all duration-[0.5s] md:w-12"
          : "transition-all duration-[0.5s] w-[70%] md:w-[30%] lg:w-[13rem] rounded-lg"
      } h-[95dvh] sidebar-bg flex flex-col justify-evenly px-2 fixed left-2 ${
        !darkTheme ? "bg-[#5c5c5c]" : "bg-[#0A192F]"
      } rounded-l-lg items-start lg:hover:cursor-pointer  z-20`}
      onMouseEnter={() => {
        handleMouseEnter();
      }}
      onMouseLeave={() => {
        handleMouseLeave();
      }}
    >
      <button
        type="button"
        onClick={() => {
          handleClick();
        }}
        className="lg:hidden"
      >
        {!sidebarOpen ? (
          <List
            size={32}
            weight="regular"
            color={!darkTheme ? "#FFFFFF" : "#00997a"}
          />
        ) : (
          <X
            size={32}
            weight="regular"
            color={!darkTheme ? "#FFFFFF" : "#00997a"}
          />
        )}
      </button>
      <section className="flex flex-col justify-between h-40 md:h-60 lg:h-[12rem]">
        <NavLink
          to="/"
          className="flex flex-row w-full items-center justify-start hover:font-bold"
        >
          <EnvelopeSimple
            size={32}
            weight="regular"
            color={!darkTheme ? "#FFFFFF" : "#00997a"}
          />{" "}
          <span
            className={`ml-4 text-[1.3rem] ${
              !darkTheme ? "text-[#e0e0e0]" : "text-[#00997a]"
            } ${
              !sidebarOpen
                ? "opacity-0 transition-all duration-[0.5s]"
                : "opacity-100 transition-all duration-[0.5s]"
            }`}
          >
            Chats
          </span>
        </NavLink>
        <NavLink
          to="/favorites"
          className="flex flex-row w-full items-center justify-start hover:font-bold"
        >
          <HeartStraight
            size={32}
            weight="regular"
            color={!darkTheme ? "#FFFFFF" : "#00997a"}
          />{" "}
          <span
            className={`ml-4 text-[1.3rem] ${
              !darkTheme ? "text-[#e0e0e0]" : "text-[#00997a]"
            } ${
              !sidebarOpen
                ? "opacity-0 transition-all duration-[0.5s]"
                : "opacity-100 transition-all duration-[0.5s]"
            }`}
          >
            Favoritos
          </span>
        </NavLink>
        <NavLink
          to="/contacts"
          className="flex flex-row w-full items-center justify-start hover:font-bold"
        >
          <UsersThree
            size={32}
            weight="regular"
            color={!darkTheme ? "#FFFFFF" : "#00997a"}
          />{" "}
          <span
            className={`ml-4 text-[1.3rem] ${
              !darkTheme ? "text-[#e0e0e0]" : "text-[#00997a]"
            } ${
              !sidebarOpen
                ? "opacity-0 transition-all duration-[0.5s]"
                : "opacity-100 transition-all duration-[0.5s]"
            }`}
          >
            Contactos
          </span>
        </NavLink>
        <NavLink
          to="profile"
          className="flex flex-row w-full items-center justify-start hover:font-bold"
        >
          <User
            size={32}
            weight="regular"
            color={!darkTheme ? "#FFFFFF" : "#00997a"}
          />{" "}
          <span
            className={`ml-4 text-[1.3rem] ${
              !darkTheme ? "text-[#e0e0e0]" : "text-[#00997a]"
            } ${
              !sidebarOpen
                ? "opacity-0 transition-all duration-[0.5s]"
                : "opacity-100 transition-all duration-[0.5s]"
            }`}
          >
            Mi perfil
          </span>
        </NavLink>
      </section>
      <div className="flex flex-col justify-between md:h-20">
        <NavLink
          to="/settings"
          className="flex flex-row w-full items-center justify-start hover:font-bold transition-none"
        >
          <GearSix
            size={32}
            weight="regular"
            color={!darkTheme ? "#FFFFFF" : "#00997a"}
          />{" "}
          <span
            className={`ml-4 text-[1.3rem] ${
              !darkTheme ? "text-[#e0e0e0]" : "text-[#00997a]"
            } ${
              !sidebarOpen
                ? "opacity-0 transition-all duration-[0.5s]"
                : "opacity-100 transition-all duration-[0.5s]"
            }`}
          >
            Configuración
          </span>
        </NavLink>
        <button className="flex flex-row w-full items-center justify-start hover:font-bold">
          <SignOut
            size={32}
            weight="regular"
            color={!darkTheme ? "#FFFFFF" : "#00997a"}
          />{" "}
          <span
            className={`ml-4 text-[1.3rem] ${
              !darkTheme ? "text-[#e0e0e0]" : "text-[#00997a]"
            } ${
              !sidebarOpen
                ? "opacity-0 transition-all duration-[0.5s]"
                : "opacity-100 transition-all duration-[0.5s]"
            }`}
          >
            Salir
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
