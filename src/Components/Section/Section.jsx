import React from "react";

const Section = ({ children, darkTheme }) => {
  return (
    <section
      className={`${
        !darkTheme
          ? "bg-[#f5f5f5] text-[#333333]"
          : "bg-[#333f58] text-[#e0e0e0]"
      } h-full w-[18rem] options-bar pb-8 options-bar overflow-y-auto overflow-x-hidden flex flex-col items-center md:w-[20rem] rounded-r-lg md:rounded-none absolute left-12 top-0 bottom-0`}
    >
      {children}
    </section>
  );
};

export default Section;
