import React from 'react'
import Header from './Header'
import { HOME_BCKGRD_IMG } from '../utils/constant'

const Body = () => {
  return (
    
    <div className='relative'>
        <Header comp="Home" />
        <div className='w-full h-[700px]'>
            <div>
                <img className='object-cover' src={HOME_BCKGRD_IMG} alt="Alternate" />
            </div>        
        </div>
        <div className='absolute top-1/2 left-40'>
            <h1 className='font-extrabold  text-[50px] text-white'>Unlimited movies, TV shows and more</h1><br />
            <h6 className='text-[30px] text-white'>Watch anywhere. Cancel anytime.</h6>
        </div>
    </div>
    
  )
}

export default Body