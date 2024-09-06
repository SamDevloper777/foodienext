import categoryModel from '@/model/categoryModel';
import Dbconnect from '@/utils/Dbconnect';
import { redirect } from 'next/navigation';
import React from 'react'

const CategoryForm =  () => {

    const handleInsertCategory=async(formData)=>{
        "use server";

        let data={
            catname:formData.get('categoryName'),
            catDescription:formData.get('categoryDescription')
        }
        Dbconnect();
        let created =await categoryModel.create(data);
        redirect("/");
    }

  return (
    <div>
        <form action={handleInsertCategory}>
            <div className='mb-3'>
                <label htmlFor="categoryName" className='form-label'>Category Name</label>
                <input type="text" className='border w-full px-3 py-2 rounded' id="categoryName" name='categoryName' required />
            </div>
            <div className='mb-3'>
                <label htmlFor="categoryName" className='form-label'>Category Name</label>
                <textarea className='border w-full px-3 py-2 rounded' name="categoryDescription" id="categoryDescription"></textarea>
            </div>
            <button type='submit' className='bg-teal-500 hover:bg-teal-700 rounded px-3 py-2 text-white'>Add category</button>
        </form>
    </div>
  )
}

export default CategoryForm