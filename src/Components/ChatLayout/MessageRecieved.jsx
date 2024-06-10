import React from 'react'

const MessageRecieved = ({children}) => {
  return (
    <div className='receiver bg-[var(--message-received)] w-[300px] lg:w-[350px] xl:w-[450px]  p-4 rounded-t-xl rounded-r-xl mx-3 my-2 self-start relative before:border-b-[10px] before:border-b-solid before:border-b-[var(--message-received)] text-[var(--text-200)]'>
      {children}
    </div>
  )
}

export default MessageRecieved
