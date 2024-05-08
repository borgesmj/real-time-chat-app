import {
  User,
  UsersThree,
  HeartStraight,
  GearSix,
  EnvelopeSimple,
} from "@phosphor-icons/react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = ({darkTheme}) => {
  return (
    <div className={`w-12 h-dvh sidebar-bg flex flex-col justify-evenly px-2 fixed left-0 top-0 bottom-0 ${!darkTheme ? 'bg-[#5c5c5c]' : 'bg-[#0A192F]'}`}>
      <section className="flex flex-col justify-between h-40">
        <NavLink to="/">
          <EnvelopeSimple size={32} weight="regular" color="white" /> <span className="hidden">Messages</span>
        </NavLink>
        <NavLink to="/favorites">
          <HeartStraight size={32} weight="regular" color="white" />
        </NavLink>
        <NavLink to="groups">
          <UsersThree size={32} weight="regular" color="white" />
        </NavLink>
        <NavLink to="profile">
          <User size={32} weight="regular" color="white" />
        </NavLink>
      </section>
      <NavLink to="/settings">
        <GearSix size={32} weight="regular" color="white" />
      </NavLink>
    </div>
  );
};

export default Sidebar;
