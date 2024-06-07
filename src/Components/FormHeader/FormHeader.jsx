import React from "react";

const FormHeader = ({ registerOpen, setRegisterOpen }) => {
  /*
  .formheader > h2:nth-child(1):before,
  .formheader > h2:nth-child(2):before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 0%;
    background-color: #ffffff10;
    transition: all ease 0.3s;
  }
  
  */
  return (
    <div className="formheader w-full h-14 flex flex-row justify-between">
      <h2
        className={`relative w-1/2 h-full text-center flex justify-center items-center text-[1rem] text-[var(--text-100)]
         before:content-[""] before:absolute before:top-0 before:right-0 before:h-full  before:bg-[var(--transparent-accent)] before:transition-all before:rounded-tl-xl
         ${!registerOpen
            ? "border-b-solid border-b-[var(--accent-100)] border-b-[3px] font-bold before:w-full"
            : "border-b-solid border-b-transparent border-b-[3px] before:w-0"
          }`}
        onClick={() => {
          setRegisterOpen(false);
        }}
      >
        Iniciar Sesión
      </h2>
      <h2
        className={`relative w-1/2 h-full text-center flex justify-center items-center text-[1rem] text-[var(--text-100)] before:content-[""] before:absolute before:top-0 before:left-0 before:h-full before:bg-[var(--transparent-accent)] before:transition-all before:duration-300 before:ease-in-out before:rounded-tr-xl ${registerOpen
            ? "border-b-solid border-b-[var(--accent-100)] border-b-[3px] font-bold before:w-full"
            : "border-b-solid border-b-transparent border-b-[3px] before:w-0"
          }`}
        onClick={() => {
          setRegisterOpen(true);
        }}
      >
        Registro
      </h2>

    </div>
  );
};

export default FormHeader;
