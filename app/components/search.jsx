import React from 'react'
import { BsList, BsSearch } from "react-icons/bs";


const Search = () => {
  return (
    
<div className='flex w-[98%] shadow-xl  rounded-md'>
      <span className='flex gap-3 items-center flex-1 px-5 py-1   '>
        <BsSearch className='w-5 h-5'/>
        <input type="search" placeholder="Search Food & Dishes" className='focus:outline-none focus:border-none flex-1 ' />
        <BsList className='w-5 h-5'/>
      </span>
    </div>
  )
}

export default Search