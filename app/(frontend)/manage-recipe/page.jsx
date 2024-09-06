import Sidebar from '@/app/components/sidebar';
import RecipeModel from '@/model/recipeModel'
import React from 'react'

const page = async () => {
    const category = await RecipeModel.find().populate('recipeCategory');
    return (
        <div className='flex flex-1 gap-10 '>
            <Sidebar/>
            <div className='p-10 w-full'>
            <table className='w-full'>
                <thead>
                    <tr>
                        <th className='border border-slate-400 p-4'>Id</th>
                        <th className='border border-slate-400 p-4'>Name</th>
                        <th className='border border-slate-400 p-4'>image</th>
                        <th className='border border-slate-400 p-4'>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {category.map((item,i) => (
                        <tr key={item._id}>
                            <td className='border text-center p-3 border-slate-400'>{i+1}</td>
                            <td className='border text-center p-3 border-slate-400'>{item.recipeName}</td>
                            <td className='border text-center p-3 flex justify-center border-slate-400'><img className='object-cover rounded-md w-12 h-12' src={`/dish/${item.image}`} alt="" /></td>
                            <td className='border text-center p-3 border-slate-400'>{item.recipeCategory?.catname}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default page