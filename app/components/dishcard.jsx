import { HandleOrderInsertion } from '@/utils/action'
import React from 'react'

const Dishcard = ({image,label,price,category,id}) => {
    return (
        <div className='flex flex-col gap-2 p-2'>
            <img src={`/dish/${image}`} className='rounded-md object-cover w-auto h-[120px]' alt="" />

            <div className='flex justify-between '>
                <div className='flex w-[80%]  justify-between'>
                    <h2 className='ml-2' >{label}</h2>
                    <h3 className='mr-2'>Rs.{price}/-</h3>
                </div>
            </div>
            <div className='flex justify-between items-center '>
                <p className='text-slate-600 ml-2 text-sm'>{category}</p>
                <form action={HandleOrderInsertion} method='post'>
                    <input type="hidden" value={id} name='recipeId'/>
                    <input type="submit" value="Add" className='bg-green-400 text-white px-3 py-1 rounded-lg' />
                </form>
            </div>
            
        </div>
    )
}

export default Dishcard