import React, { Suspense } from 'react'
import Maincontainer from '../../components/main-container'
import Ordercontainer from '../../components/order-container'
import Sidebar from '../../components/sidebar'
import RecipeModel from '@/model/recipeModel'
import Dbconnect from '@/utils/Dbconnect'
import { SignIn } from '@/app/components/login'
import { auth } from '@/auth'

const page = async({params}) => {
  const session = await auth();
  Dbconnect();
  const {catid}=params;
  
  let callingDish; 

  if(!catid)
  {
     callingDish=await RecipeModel.find().populate('recipeCategory')

  }
  else{
     callingDish = await RecipeModel.find({recipeCategory:catid}).populate('recipeCategory');
  }
  return (
    <div className='flex flex-1 h-screen'>
      {/* {!session && <SignIn/>}
      {session && ( */}
        <>
        <Sidebar/>
      <Suspense>
      <Maincontainer callingDish={callingDish}/>
      </Suspense>
      <Ordercontainer/>
        </>
      {/* )} */}
      
    </div>
  )
}

export default page