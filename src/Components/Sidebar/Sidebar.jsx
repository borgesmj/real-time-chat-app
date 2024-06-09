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

const Sidebar = ({
  darkTheme,
  sidebarOpen,
  setSidebarOpen,
  currentUser,
  setModalIsOpen,
}) => {
  const handleClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

 const btnColor = darkTheme ? "#FFFFFF" : "#0b0a0a";

  const links = [
    {
      href: "/chats",
      icon: (
        <EnvelopeSimple
          size={32}
          weight="regular"
          color={btnColor}
        />
      ),
      text: "Chats",
    },
    {
      href: "/friends",
      icon: (
        <UsersThree
          size={32}
          weight="regular"
          color={btnColor}
        />
      ),
      text: "Contactos",
    },
    {
      href: `/user/${currentUser.username}`,
      icon: (
        <User
          size={32}
          weight="regular"
          color={btnColor}
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
          : "transition-all duration-[0.5s] w-[65dvw] md:w-[30%] lg:w-[13rem] z-20"
      } h-full flex flex-col justify-evenly px-2 absolute left-0 top-0 bottom-0 bg-[var(--bg-200)] items-start lg:hover:cursor-pointer`}
    >
      <button
        type="button"
        className={`${
          !sidebarOpen ? "rotate-0" : "rotate-6"
        } transition-[transform] `}
        onClick={() => {
          handleClick();
        }}
      >
        {!sidebarOpen ? (
          <List
            size={32}
            weight="regular"
            color={btnColor}
          />
        ) : (
          <X
            size={32}
            weight="regular"
            color={btnColor}
          />
        )}
      </button>
      <section className="flex flex-col justify-between h-40 md:h-40 lg:h-[8rem]">
        {links.map((item, index) => (
          <a
            key={`link_${index}`}
            href={item.href}
            className="flex flex-row w-full items-center justify-start hover:font-bold"
          >
            {item.icon}{" "}
            {sidebarOpen && (
              <span
                className={`ml-4 text-[1.3rem] text-[var(--text-200)] ${
                  !sidebarOpen
                    ? "opacity-0 transition-all duration-[0.5s]"
                    : "opacity-100 transition-all duration-[0.5s]"
                }`}
              >
                {item.text}
              </span>
            )}
          </a>
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
            color={btnColor}
          />{" "}
          {sidebarOpen && (
            <span
              className={`ml-4 text-[1.3rem] text-[var(--text-200)] ${
                !sidebarOpen
                  ? "opacity-0 transition-all duration-[0.5s]"
                  : "opacity-100 transition-all duration-[0.5s]"
              }`}
            >
              Configuración
            </span>
          )}
        </NavLink>
        <button
          className="flex flex-row w-full items-center justify-start hover:font-bold"
          onClick={() => {
            setModalIsOpen(true);
          }}
        >
          <SignOut
            size={32}
            weight="regular"
            color={btnColor}
          />{" "}
          {sidebarOpen && (
            <span
              className={`ml-4 text-[1.3rem] text-[var(--text-200)] ${
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
