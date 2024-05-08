import React from 'react'
import {Sun, Moon} from "@phosphor-icons/react";
import './Settings.css'
import Section from '../../Section/Section'
import ThemeToggle from '../../Theme-toggle/ThemeToggle';

const Settings = ({darkTheme, setDarkTheme}) => {

  const handleChange = () => {
    setDarkTheme(!darkTheme)
  }

  return (
    <div>
      <Section darkTheme = {darkTheme}>
      <h3 className='w-full text-center text-[2rem] uppercase font-[roboto]'>Settings</h3>
      <ThemeToggle darkTheme={darkTheme} handleChange={handleChange}/>
      </Section>
    </div>
  )
}

export default Settings
