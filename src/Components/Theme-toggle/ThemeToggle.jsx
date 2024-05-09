import React from 'react'
import {Sun, Moon} from "@phosphor-icons/react";

const ThemeToggle = ({darkTheme, handleChange}) => {
  return (
    <div className='w-full flex justify-center mt-4'>
      <input type="checkbox" name="" id="theme_checkbox" checked={darkTheme} onChange={handleChange} className='hidden'/>
      <label htmlFor="theme_checkbox" className={`w-[60px] h-[30px] inline-block rounded-[50px] ${!darkTheme ? 'bg-[#479ae0]' : 'bg-[#0A192F]'} relative`} id='theme-toggle'>
         <div className='flex justify-center items-center'>
         {darkTheme ?
         <Moon size={32} weight="fill" fill='#C0C0C0' className='toogle-moon' /> : <Sun size={20} weight="fill" fill='yellow' className='toggle-sun'/> }
         </div>
      </label>
    </div>
  )
}

export default ThemeToggle
