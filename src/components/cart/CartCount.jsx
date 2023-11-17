import React from 'react'
import { ChevronDoubleLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';



const CartCount = ({onCartToggle, onClrearCartItems,totalQTY}) => {


  return (
    <>
        <div className='flex items-center justify-between p-2 bg-white'>
            <div className='flex items-center gap-2 '>
                <div>
                    <ChevronDoubleLeftIcon className='w-5 cursor-pointer hover:text-orange-500' onClick={onCartToggle}/>
                </div>
                <div>
                    <h1 className='text-slate-900 text-base font-medium'>Your Cart <span className='px-1 py-0.5 rounded font-normal text-sm bg-slate-900 w-fit text-slate-200'>({totalQTY} Items)</span></h1>
                </div>
            </div>
            <div>
                <button onClick={onClrearCartItems} className='p-0.5 rounded bg-slate-900 shadow-slate-900'
                >
                    <XMarkIcon  className='w-5 text-white'/>
                </button>
                
            </div>
        </div>
    </>
  )
}

export default CartCount