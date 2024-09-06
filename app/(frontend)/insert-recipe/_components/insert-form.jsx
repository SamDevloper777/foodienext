import categoryModel from '@/model/categoryModel';
import Dbconnect from '@/utils/Dbconnect'
import React from 'react'
import { writeFile } from "fs/promises";
import {join} from "path";
import RecipeModel from '@/model/recipeModel';
import { redirect } from 'next/navigation';

const InsertForm = async () => {
  
    Dbconnect();
    const categories= await categoryModel.find({});
    const handlerecipe=async(formData)=>{
          "use server"

        //image work
        let image= formData.get('image');
        let bytes=await image.arrayBuffer();
        let buffer= Buffer.from(bytes);
        let path= join("./public","dish",image.name)
        await writeFile(path,buffer);
        
        let data={
            recipeName:formData.get('recipeName'),
            label:formData.get('label'),
            recipePrice:formData.get('price'),
            recipeCategory:formData.get('category'),  
            image:image.name,
        }
        let newDish= await RecipeModel.create(data);
        redirect("/");
    }
   
   
   
  return (
    <div className='w-5/12 rounded-md h-[500px] bg-white p-4'>
        <h2 className='text-2xl font-semibold text-zinc-700 px-4'>Insert FOOD</h2>
        <form action={handlerecipe} className='p-4 '>
            <div className='mb-3 flex flex-col'>
                <label htmlFor="">RecipeName</label>
                <input type="text" name='recipeName' className='border border-slate-400 bg-slate-50 rounded px-3 py-1' required />
            </div>
            <div className='mb-3 flex flex-col'>
                <label htmlFor="">Label</label>
                <select name="label" className='border border-slate-400 bg-slate-50 rounded px-3 py-1' id="RecipeLabel">
                    <option value="" selected disabled>select Label</option>
                    <option value="best selling">Best Selling</option>
                    <option value="new Arrived">New Arrived </option>
                </select>
            </div>
            <div className='mb-3 flex flex-col'>
                <label htmlFor="">Price</label>
                <input type="text" name='price' className='border border-slate-400 bg-slate-50 rounded px-3 py-1' />
            </div>
            <div className='mb-3 flex flex-col'>
                <label htmlFor="">Category</label>
                <select name="category" className='border border-slate-400  bg-slate-50 rounded px-3 py-1' required>
                    {categories.map((cat,i)=>(
                        <option key={i} value={cat._id} > {cat.catname}</option>
                    ))
                        
                    }
                </select>
            </div>
            <div className='mb-3 flex flex-col'>
                <label htmlFor="">Add</label>
                <input type="file" name='image' className='border border-slate-400 bg-slate-50 rounded px-3 py-1' />
            </div>
            <div className='mb-3 flex flex-col'>
                <input type="submit" name='submit' value="create new Recipe" className='border text-white bg-teal-600 rounded px-3 py-1'/>
            </div>
            
            
        </form>
    </div>
  )
}

export default InsertForm