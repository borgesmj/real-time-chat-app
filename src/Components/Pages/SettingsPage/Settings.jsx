import React from 'react'
import './Settings.css'
import Section from '../../Section/Section'
import ThemeToggle from '../../Theme-toggle/ThemeToggle';
import {NavLink} from 'react-router-dom'

const Settings = ({darkTheme, setDarkTheme}) => {

  const handleChange = () => {
    setDarkTheme(!darkTheme)
  }

  return (
    <div>
      <Section darkTheme = {darkTheme}>
      <h3 className='w-full text-center text-[2rem] uppercase font-[roboto]'>Settings</h3>
      <NavLink to="password">Contraseña</NavLink>
      <ThemeToggle darkTheme={darkTheme} handleChange={handleChange}/>
      </Section>
    </div>
  )
}

export default Settings
