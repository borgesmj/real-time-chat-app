const Sender = ({children}) => {

  return (
    <div className="sender bg-red-100 w-[300px] lg:w-[350px] xl:w-[450px] p-4 rounded-t-xl rounded-l-xl mx-3 my-2 self-end relative before:border-b-[10px] before:border-b-solid before:border-b-red-100">
      {children}
      <span className="text-[10px] absolute -bottom-4 right-0">13:59</span>
    </div>
  )
}

export default Sender
