import React from 'react';

const Section = ({ children, darkTheme }) => {
  return (
    <section className={`${!darkTheme ? 'bg-[#f5f5f5] text-[#333333]' : 'bg-[#333f58] text-[#e0e0e0]'} h-dvh .options-bar py-8 ml-12 options-bar py-10 overflow-y-auto overflow-x-hidden`}>
      {children}
    </section>
  );
};

export default Section;
