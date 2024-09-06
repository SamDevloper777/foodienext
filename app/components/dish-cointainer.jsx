import React from 'react'
import Dishcard from './dishcard'
import RecipeModel from '@/model/recipeModel'

const DishContainer = ({callingDish}) => {
    
    return (
        <div className="overflow-y-scroll mt-3">
            <div className='grid grid-cols-3 gap-4'>
                {
                callingDish.map((dish,i) => (
                    <Dishcard 
                    id={dish._id}
                    key={i} label={dish.recipeName} 
                    category={dish.recipeCategory?.catname} 
                    price={dish.recipePrice} 
                    image={dish.image} />
                ))
                }
            </div>
        </div>
    )
}

export default DishContainer