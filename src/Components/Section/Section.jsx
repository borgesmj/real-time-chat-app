import React from "react";

const Section = ({ children, darkTheme }) => {
  return (
    <section
      className={`${
        !darkTheme
          ? "bg-[#f5f5f5] text-[#333333]"
          : "bg-[#333f58] text-[#e0e0e0]"
      } h-full w-[80dvw] options-bar py-8 ml-12 options-bar overflow-y-auto overflow-x-hidden flex flex-col items-center rounded-r-lg md:w-[45dvw] lg:w-[30dvw] xl:w-[25dvw] `}
    >
      {children}
    </section>
  );
};

export default Section;
