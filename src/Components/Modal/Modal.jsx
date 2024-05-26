import React from 'react'

const Modal = ({children}) => {
  return (
    <div className='z-30 fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-[#5cf1fc30]'>
      {children}
    </div>
  )
}

export default Modal
