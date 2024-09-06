import categoryModel from '@/model/categoryModel';
import Dbconnect from '@/utils/Dbconnect'
import React from 'react'

const CategoryCalling = async () => {
    
    Dbconnect();
    const category= await categoryModel.find({})
  return (
    <table className='border w-full '>
        <thead>
            <tr>
                <th className='border p-3 text-center'>Id</th>
                <th className='border p-3 text-center'>Category Name</th>
                <th className='border p-3 text-center'>Category Description</th>
                <th className='border p-3 text-center'>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                category.map((cat,i)=>(
                    <tr key={i}>
                        <td className='border p-4 text-center'>{i+1}</td>
                        <td className='border p-4 text-center'>{cat.catname}</td>
                        <td className='border p-4 text-center'>{cat.catDescription}</td>
                    </tr>

                ))
            }
        </tbody>
    </table>
  )
}

export default CategoryCalling