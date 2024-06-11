import React from 'react'

const Modal = ({children}) => {
  return (
    <div className='z-30 fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-[var(--transparent-accent)]'>
      {children}
    </div>
  )
}

export default Modal
