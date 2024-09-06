import Link from 'next/link'
import React from 'react'
import Dbconnect from '@/utils/Dbconnect';
import categoryModel from '@/model/categoryModel';



const CategoryItem = ({ Icon, label,id }) => {

    return (
        <Link  href={id?`/${id}`:"/"} className='flex  items-center justify-center  hover:bg-orange-600  border  mt-2 border-orange-600 hover:text-white flex-1 p-1'>
            {/* <Icon className="w-5 h-5 text-orange-600" /> */}
            <h5 className='text-sm capitalize font-medium'>{label}</h5>
        </Link>
    )

}

const Categorynavbar = async () => {
    "use server"
    Dbconnect();
    const categories = await categoryModel.find({});
    return (
        <div className='flex justify-center w-full mt-2'>
           {
            categories.map((cat,i)=>(
                
            <CategoryItem index={i} label={cat.catname} id={cat._id} />))}
            <CategoryItem label="All"/>
            
        </div>
    )
}

export default Categorynavbar