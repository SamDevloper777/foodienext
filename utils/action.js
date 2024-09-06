import OrderModel from "@/model/orderModel"
import Dbconnect from "./Dbconnect"
import { redirect } from "next/navigation"

export const HandleOrderInsertion=async(formData)=>{
    "use server"
    
   const data={
        "recipeId": formData.get("recipeId"),
        
    }
    //insertion 
    Dbconnect(); 
    //check if alredy exist
    const exist =await OrderModel.findOne({recipeId:formData.get("recipeId")});

    if(exist){
        const updated =await OrderModel.findByIdAndUpdate(exist._id ,{qty:exist.qty+1});
    }
    else{
        const updated=await OrderModel.create(data);
    }
    redirect("/")
    

}

export const HandleOrderMinus=async(formData)=>{
    "use server"
    
   const data={
        "recipeId": formData.get("recipeId"),  
    }
    //insertion 
    Dbconnect(); 
    //check if alredy exist
    const exist =await OrderModel.findOne({recipeId:formData.get("recipeId")});

    if(exist){
        if(exist)
        if(exist.qty>1)await OrderModel.findByIdAndUpdate(exist._id,{qty:exist.qty-1});
        else await OrderModel.findByIdAndDelete(exist._id);
    }
    
    redirect("/")
    

}
export const handleOrderItemDelete= async(formData)=>{
    "use server"
    const orderId = formData.get("orderId")
    Dbconnect();
   await OrderModel.findByIdAndDelete(orderId); 
    redirect('/');
}