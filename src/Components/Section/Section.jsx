import React from 'react';

const Section = ({ children, darkTheme }) => {
  return (
    <section className={`${!darkTheme ? 'bg-[#f5f5f5]' : 'bg-[#333f58]'} h-dvh .options-bar py-8`}>
      {children}
    </section>
  );
};

export default Section;
