import FormTemplate from "../../Templates/FormTemplate";
import FormField from "../FormField/FormField";
import {Password} from '@phosphor-icons/react'
import SubmitBtn from '../SubmitBtn/SubmitBtn'

const ChangePassword = () => {
  return (
    <div className="w-full md:w-[300px] h-fit absolute top-12 md:top-20 bottom-12 bg-blue-500 flex flex-col overflow-y-auto py-10 mt-10">
      <FormTemplate>
        <FormField>
          <div className="bg-[#1a5cf1] w-3/4 flex flex-row px-4 py-2 rounded-[10px]">
            <span><Password/></span>
            <input type="password" name="" id="" className="bg-transparent focus:outline-none ml-4" placeholder="Contraseña Actual" />
          </div>
        </FormField>
        <FormField>
          <div className="bg-[#1a5cf1] w-3/4 flex flex-row px-4 py-2 rounded-[10px]">
            <span><Password/></span>
            <input type="password" name="" id="" className="bg-transparent focus:outline-none ml-4" placeholder="Nueva contraseña" />
          </div>
        </FormField>
        <FormField>
          <div className="bg-[#1a5cf1] w-3/4 flex flex-row px-4 py-2 rounded-[10px]">
            <span><Password/></span>
            <input type="password" name="" id="" className="bg-transparent focus:outline-none ml-4" placeholder="Repita su contraseña" />
          </div>
        </FormField>
        <FormField>
          <SubmitBtn btnText="Guardar"/>
        </FormField>
      </FormTemplate>
    </div>
  );
};

export default ChangePassword;
