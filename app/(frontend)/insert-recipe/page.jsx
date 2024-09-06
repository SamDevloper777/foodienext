import React from 'react'
import InsertForm from './_components/insert-form'
import Sidebar from '@/app/components/sidebar'

const page = () => {
  return (
    <div className='flex flex-1'>
    <Sidebar/>
    <div className='flex flex-1 justify-center items-center bg-slate-100 h-screen w-full'>
        <InsertForm/>
    </div>
    </div>
  )
}

export default page