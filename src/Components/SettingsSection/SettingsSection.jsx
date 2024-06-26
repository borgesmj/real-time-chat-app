import { ArrowLeft } from "@phosphor-icons/react";

const SettingsSection = ({setOpenSettingsSection, children}) => {
  return (
    <main className="settings-section relative md:left-[23rem] w-dvw h-full  top-0 md:w-[23rem] md:opacity-100 md:transform-none lg:w-[60dvw] 2xl:left-[28rem] bg-[#E2DFD2] flex items-center flex-col justify-center">
      <div
        className={`bg-[var(--primary-200)] flex justify-start items-center w-full h-12 md:h-20 absolute top-0`}
      >
        <span onClick={()=>{setOpenSettingsSection(false)}} className="md:hidden ml-4 h-full w-12 flex justify-center items-center rounded-full border-solid border-white border-[2px]">
          <ArrowLeft size={32} />
        </span>{" "}
        <span className="ml-4">Configuraciones</span>
      </div>
      {children}
    </main>
  );
};

export default SettingsSection;
