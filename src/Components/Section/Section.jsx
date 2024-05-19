import ChatName from "../ChatName/ChatName";

const Section = ({ children, darkTheme }) => {
  return (
    <section
      className={`${
        !darkTheme
          ? "bg-[#f5f5f5] text-[#333333]"
          : "bg-[#333f58] text-[#e0e0e0]"
      } h-full section-width options-bar pb-8 options-bar overflow-y-auto overflow-x-hidden flex flex-col items-center md:w-[20rem] 2xl:w-[25rem] absolute left-12 top-0 bottom-0 right-0`}
    >
        <ChatName darkTheme={darkTheme}/>
      {children}
    </section>
  );
};

export default Section;
