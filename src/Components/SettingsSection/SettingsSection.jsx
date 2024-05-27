import { ArrowLeft } from "@phosphor-icons/react";

const SettingsSection = ({setOpenSettingsSection}) => {
  return (
    <main className="settings-section relative md:left-[23rem] w-dvw h-full  top-0 md:w-[23rem] md:opacity-100 md:transform-none block lg:w-[60dvw] 2xl:left-[28rem] bg-white">
      <div
        className={` bg-blue-500 flex justify-start items-center w-full h-12 md:h-20 absolute top-0`}
      >
        <span onClick={()=>{setOpenSettingsSection(false)}} className="md:hidden ml-4 h-full w-12 flex justify-center items-center rounded-full border-solid border-white border-[2px]">
          <ArrowLeft size={32} />
        </span>{" "}
        <span className="ml-4">Profile</span>
      </div>
    </main>
  );
};

export default SettingsSection;
