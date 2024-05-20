import React from 'react'

const Reciever = ({children}) => {
  return (
    <div className='receiver bg-green-100 w-[300px] lg:w-[350px] xl:w-[450px]  p-4 rounded-t-xl rounded-r-xl mx-3 my-2 self-start relative before:border-b-[10px] before:border-b-solid before:border-b-green-100'>
      {children}
      <span className="text-[10px] absolute -bottom-4 left-0">13:59</span>
    </div>
  )
}

export default Reciever
