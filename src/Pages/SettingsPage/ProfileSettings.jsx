import Section from "../../Components/Section/Section";
import { NavLink } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";

const ProfileSettings = ({ darkTheme, setOpenProfileSettings }) => {
  return (
    <Section darkTheme={darkTheme}>
      <div className="flex flex-col w-full h-dvh">
        <div
          onClick={()=> setOpenProfileSettings(false)}
          className={`w-[50px] h-[50px] ml-[20px] mt-[20px] flex justify-center items-center rounded-full border-solid border-[1px] ${
            !darkTheme ? "border-[#917800]" : "border-[#dbffff]"
          }`}
        >
          <ArrowLeft size={32} />
        </div>
      </div>
    </Section>
  );
};

export default ProfileSettings;
