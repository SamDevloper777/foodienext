import React from 'react'

const CategoryHeader = () => {
  return (
    <div className='flex flex-1 max-h-32'>
        <div className='grid grid-cols-2'>
            <div className='text-left text-3xl font-medium'>Insert category</div>
            <div className='text-right text-3xl font-medium'>Total 22</div>
        </div>
    </div>
  )
}

export default CategoryHeader