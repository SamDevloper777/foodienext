import React, { Suspense } from 'react'

import Search from './search'
import Banner from './ad-banner'
import Categorynavbar from './categories-navbar'
import DishContainer from './dish-cointainer'
import CircularIndeterminate from './lodingUi'
import Loding from './lodingUi'
const   Maincontainer = ({callingDish}) => {
 
    return (
        <div className='w-8/12 h-screen p-5 '>
            <div className='flex justify-center'>
                <Search />
            </div>
            
                <Banner />
                <Categorynavbar/>
                <DishContainer callingDish={callingDish} />
               
        </div>



    )
}

export default Maincontainer