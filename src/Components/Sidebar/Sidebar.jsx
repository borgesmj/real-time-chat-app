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
import { NavLink } from "react-router-dom";

const Sidebar = ({ darkTheme, sidebarOpen, setSidebarOpen }) => {
  const handleClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const links = [
    {
      href: "/",
      icon: (
        <EnvelopeSimple
          size={32}
          weight="regular"
          color={!darkTheme ? "#FFFFFF" : "#00997a"}
        />
      ),
      text: "Chats",
    },
    {
      href: "/favorites",
      icon: (
        <HeartStraight
          size={32}
          weight="regular"
          color={!darkTheme ? "#FFFFFF" : "#00997a"}
        />
      ),
      text: "Favoritos",
    },
    {
      href: "/contacts",
      icon: (
        <UsersThree
          size={32}
          weight="regular"
          color={!darkTheme ? "#FFFFFF" : "#00997a"}
        />
      ),
      text: "Contactos",
    },
    {
      href: "/profile",
      icon: (
        <User
          size={32}
          weight="regular"
          color={!darkTheme ? "#FFFFFF" : "#00997a"}
        />
      ),
      text: "Mi perfil",
    },
  ];

  return (
    <nav
      className={`${
        !sidebarOpen
          ? "nav-width transition-all duration-[0.5s] md:w-12 z-0"
          : "transition-all duration-[0.5s] w-dvw md:w-[30%] lg:w-[13rem] z-20"
      } h-full sidebar-bg flex flex-col justify-evenly px-2 absolute left-0 top-0 bottom-0 ${
        !darkTheme ? "bg-[#5c5c5c]" : "bg-[#0A192F]"
      } items-start lg:hover:cursor-pointer`}
    >
      <button
        type="button"
        className={`${!sidebarOpen ? 'rotate-0' : 'rotate-6'} transition-[transform] `}
        onClick={() => {
          handleClick();
        }}
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
        {links.map((item, index) => (
          <NavLink
            key={`link_${index}`}
            to={item.href}
            className="flex flex-row w-full items-center justify-start hover:font-bold"
          >
            {item.icon}{" "}
            {sidebarOpen && (
              <span
                className={`ml-4 text-[1.3rem] ${
                  !darkTheme ? "text-[#e0e0e0]" : "text-[#00997a]"
                } ${
                  !sidebarOpen
                    ? "opacity-0 transition-all duration-[0.5s]"
                    : "opacity-100 transition-all duration-[0.5s]"
                }`}
              >
                {item.text}
              </span>
            )}
          </NavLink>
        ))}
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
          {sidebarOpen && (
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
          )}
        </NavLink>
        <button className="flex flex-row w-full items-center justify-start hover:font-bold">
          <SignOut
            size={32}
            weight="regular"
            color={!darkTheme ? "#FFFFFF" : "#00997a"}
          />{" "}
          {sidebarOpen && (
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
          )}
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
