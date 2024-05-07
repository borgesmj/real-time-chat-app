import {
  User,
  UsersThree,
  HeartStraight,
  GearSix,
  EnvelopeSimple,
} from "@phosphor-icons/react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-fit h-dvh sidebar-bg flex flex-col justify-evenly px-2">
      <section className="flex flex-col justify-between h-40">
        <NavLink to="/messages">
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
