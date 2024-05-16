import {MagnifyingGlass} from '@phosphor-icons/react'

const SearchBAr = () => {
  return (
    <form className='search-bar w-full flex justify-center items-center h-8 my-6'>
      <p className='w-3/4 px-4 py-2  flex flex-row justify-between bg-white border-solid border-[1px] border-black rounded-[5rem]'>
        <input type="text" name="" id="" placeholder='Buscar...' className=' focus:w-full outline-none' />
        <span  className='border-solid transition-[opacity] opacity-100 rounded-full border-1px border-black max-h-full' ><MagnifyingGlass size={20}/></span>
      </p>
    </form>
  )
}

export default SearchBAr
