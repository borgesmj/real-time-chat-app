import React from "react";

const FormHeader = ({ registerOpen, setRegisterOpen }) => {

  
  return (
    <div className="formheader w-full h-14 flex flex-row justify-between">
      <h2
        className={`relative w-1/2 h-full text-center flex justify-center items-center text-[1rem]  ${
          !registerOpen
            ? "border-b-solid border-b-red-800 border-b-[3px] font-bold"
            : "border-b-solid border-b-transparent border-b-[3px]"
        }`}
        onClick={() => {
          setRegisterOpen(false);
        }}
      >
        Iniciar Sesión
      </h2>
      <h2
        className={`relative w-1/2 h-full text-center flex justify-center items-center text-[1rem] ${
          registerOpen
            ? "border-b-solid border-b-red-800 border-b-[3px] font-bold"
            : "border-b-solid border-b-transparent border-b-[3px]"
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
