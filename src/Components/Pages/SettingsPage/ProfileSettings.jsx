import Section from "../../Section/Section";
import { NavLink } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";

const ProfileSettings = ({ darkTheme }) => {
  return (
    <Section darkTheme={darkTheme}>
      <div className="flex flex-col w-full h-dvh">
        <NavLink
          to="/settings"
          className={`w-[50px] h-[50px] ml-[20px] mt-[20px] flex justify-center items-center rounded-full border-solid border-[1px] ${
            !darkTheme ? "border-[#917800]" : "border-[#dbffff]"
          }`}
        >
          <ArrowLeft size={32} />
        </NavLink>
      </div>
    </Section>
  );
};

export default ProfileSettings;
