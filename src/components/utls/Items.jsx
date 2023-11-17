import React from 'react'
import {StarIcon,ShoppingBagIcon} from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux'
import { setAddItemToCart,setOpenCart } from '../rtk/CartSlice'

const Items = ({ifExists,id, color, shadow, title, text, img, btn, rating, price}) => {

  const dispatch = useDispatch();
  
  const onAddToCart = () => {
    const item = {id , title, img , price, text, color}
    dispatch(setAddItemToCart(item))
  } 

  const onCartToggle = () => {
    dispatch(setOpenCart({
        cartState: true
    }))
}

 console.log(id);
  return (
    <div className={`relative bg-gradient-to-b ${color} ${shadow}
    grid items-center ${ifExists ? 'justify-items-start' : 'justify-items-center'}  rounded-xl py-4 px-5 transition-all duration-700
    ease-in-out w-full hover:scale-105 cursor-pointer `}>
      <div className={`grid items-center ${ifExists ? 'justify-items-start' : 'justify-items-center'}`}>
        <h1 className='text-slate-200 text-xl lg:text-lg md:text-base
        font-medium filter drop-shadow'>{title}</h1>
        <p className='text-slate-200 text-base md:text-sm font-normal filter drop-shadow'>{text}</p>
        
        <div className='flex items-center justify-between w-28'>
          <div className='flex items-center bg-white/80 px-1 rounded'>
            <h1 className='text-black text-sm'>${price}</h1>
          </div>
          <div className='flex items-center py-2'>
            <StarIcon className='icon-style text-slate-200 text-sm'/>
            <h1 className='text-slate-200 text-sm'>{rating}</h1>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between gap-3'>
        <button type='button' onClick={() => onAddToCart()} className=' bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black'>
          <ShoppingBagIcon className='icon-style text-slate-900'/>
          </button>
        <button onClick={() =>{ onAddToCart(); onCartToggle();}} className=' bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black'>{btn}</button>
      </div>
      <div className={`flex items-center  ${ifExists ? 'absolute top-5 right-1' : 'justify-center'}`}>
        <img src={img} alt="" className={`h-36 w-64 transition-theme hover:-rotate-12  ${ifExists ? 'h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]' : 'h-36 w-64'}`} />
      </div>
    </div>
  )
}

export default Items