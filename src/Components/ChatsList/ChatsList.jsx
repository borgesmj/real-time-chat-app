const ChatsList = ({darkTheme}) => {
    return (
        <div className={`w-4/5 h-[120px] ${!darkTheme ? 'bg-[#FF0000]' : 'bg-[#0A192F]'} flex flex-row items-center justify-start rounded-2xl relative hover:cursor-pointer p-2 my-2`}>
          <img src="https://thumbs.wbm.im/pw/medium/769696e34b3e45081d14212795d01414.avif" alt="" className='rounded-full h-[75px] w-[75px]'/>
          <div className='ml-2 h-full flex flex-col justify-evenly w-4/5'>
            <h3 className='font-bold'>Roland Garros</h3>
            <p>Esto es un mensaje...</p>
          </div>
          <p className='absolute bottom-0 right-0 mr-2 mb-2 text-xs'>11:52am</p>
          <span className="conected-point absolute right-0 mr-4 rounded-full w-[10px] h-[10px] bg-[#00ff00]"></span>
        </div>
      )
    }

export default ChatsList
