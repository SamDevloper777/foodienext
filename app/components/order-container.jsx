import React from 'react'
import { FcClock, IconName } from "react-icons/fc";
import OrderCard from './order-card';
import OrderModel from '@/model/orderModel';
import { FaLocationDot } from "react-icons/fa6";
import { SignOut } from './signout';

const OrderContainer = async() => {
  const orderData=await OrderModel.find({}).populate('recipeId');
  let totalPrice=0;
   let totaltax=0;
  
  return (
    <div className=' w-4/12 h-screen bg-slate-100 p-5'>
      <div className='flex justify-between'>
      <h1 className=' text-2xl '>My Order</h1>
      <SignOut/>
      </div>

      <div className="flex gap-10 justify-start mt-2">
        <span className=' flex items-center gap-2'>
        <FcClock className=' w-6 h-6'/>
        <p>40 Mins</p>
        </span>
        <span className=' flex items-center gap-2'>
        <FaLocationDot className='w-5 h-5 text-orange-500' />

        <p>5 Km</p>
        </span>
        </div>

        <div className=' flex flex-col gap-4 mt-5 max-h-[250px] overflow-y-scroll'>
       {
        orderData.map((order,index)=>{
            
            totalPrice += order.recipeId.recipePrice*order.qty;
            totaltax = totalPrice * 0.18;

            return(
            <OrderCard key={index} order={order}/>
          )
        }
        )
      }
       
        </div>

        <div className="flex flex-col mt-5 fixed bottom-0 w-[340px]">
          <hr className=' border-2' />
          <div className="flex justify-between mt-3 items-center text-slate-700 flex-1">
            <h2 className='font-semibold'>Sub Total</h2>
            <h2 >₹{totalPrice}</h2>
          </div>
          <div className="flex justify-between mt-3 items-center text-slate-700 flex-1">
            <h2 className=' font-semibold'>Tax GST(18%)</h2>
            <h2>₹{Math.round(totaltax)}</h2>
          </div>
          <hr className=' border-2 mt-2' />
          <div className="flex justify-between mt-3 items-center text-slate-700 flex-1">
            <h2 className=' font-semibold'>Sub Total</h2>
            <h2>₹{Math.ceil(totalPrice+totaltax)}</h2>
          </div>
          <a href="" className=' bg-orange-600 mb-2 text-white px-2 py-1 rounded-lg mt-3 text-xl text-center'>Check Out</a>

        </div>
      
    </div>
  )
}

export default OrderContainer

