import React from 'react'
import emptybag from '../../assets/emptybag.png';
import { ArrowLeftIcon  } from '@heroicons/react/24/outline';

const CartEmpty = ({onCartToggle}) => {
  return (
    <>
        <div className='flex items-center justify-center flex-col h-screen text-center gap-7 px-11 '>
            <img src={emptybag} alt="" className='w-40 h-auto lg:w-36 sm:w-26 hover:scale-110 duration-300 transition-all object-cover' />
            <button onClick={onCartToggle} className='flex items-center gap-2 w-fit py-2 px-3 rounded
            font-semibold bg-gradient-to-b text-sm text-slate-900 bg-orange-500 active:scale-110 shadow-orange-500 shadow'>
                <ArrowLeftIcon className='w-5'/>
                <span >Back To Nike Store</span>
            </button>
        </div>
    </>
  )
}

export default CartEmpty