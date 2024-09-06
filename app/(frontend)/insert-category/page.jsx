import Sidebar from '@/app/components/sidebar'
import React from 'react'
import CategoryForm from './_component/category-form'
import CategoryHeader from './_component/category-header'
import CategoryCalling from './_component/category-calling'

const CategoryFrom = () => {
    return (
        <div className='flex flex-1 bg-slate-100 h-screen'>
            <Sidebar />
            <div className='flex flex-1 flex-col p-10'>
                <CategoryHeader />
                <div className='flex flex-1 gap-7'>
                    <div className='w-3/12'>
                        <CategoryForm />
                    </div>
                    <div className='w-9/12 bg-white rounded'>
                        <CategoryCalling/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryFrom