import mongoose from "mongoose";
import categoryModel from "./categoryModel";

const RecipeSchema =mongoose.Schema({

    recipeName:{type:String,required:true},
    recipePrice:{type:Number,required:true},
    label:{type:String,default:null},
    image:{type:String,required:true},
    recipeCategory:{type:mongoose.Schema.Types.ObjectId,required:true,ref:categoryModel}

},{
    timestamps:true
})

const RecipeModel=mongoose.models.Recipe || mongoose.model("Recipe",RecipeSchema);
export default RecipeModel
