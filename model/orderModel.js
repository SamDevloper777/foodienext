import mongoose from "mongoose";
import RecipeModel from "./recipeModel";

const OrderSchema=mongoose.Schema({
    
    recipeId:{type:mongoose.Schema.Types.ObjectId,required:true,ref:RecipeModel},
    qty:{type:Number,default:1},
},
{
timestamps:true 
});

const OrderModel=mongoose.models.Order || mongoose.model("Order",OrderSchema);
export default OrderModel