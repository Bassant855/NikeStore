import React from 'react'
import { TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from 'react-redux';
import { setRemoveItem,setIncreaseItmeQTY,setDecreaseItmeQTY } from '../rtk/CartSlice';

const CartItem = ({item:{id, title, text, color, img, shadow, price, cartQuantity}}) => {
  const dispatch = useDispatch()
  const onRemoveItem = () => {
    dispatch(setRemoveItem({ id, title, text, img, color, shadow, price, cartQuantity }))
  }

  const increseItem = () => {
    dispatch(setIncreaseItmeQTY({ id, title, text, img, color, shadow, price, cartQuantity }))
  }
  const decreseItem = () => {
    dispatch(setDecreaseItmeQTY({ id, title, text, img, color, shadow, price, cartQuantity }))
  }

  return (
    <div className='flex items-center justify-between w-full px-5  '>
       <div className='flex gap-5 items-center'>
       <div className={`bg-gradient-to-b ${color} ${shadow} relative rounded hover:scale-105 duration-300 grid items-center transition-all p-3`}>
          <img src={img} alt=""className='w-36 h-auto lg:w-28 objict-fill' />
          <span className='absolute right-1 top-1 px-0.5 text-xs text-slate-900 blur-theme-effect bg-slate-100 rounded '>${price}</span>
        </div>

        <div className='w-80'>
          <h1 className='sm:text-sm lg-text-lg xl:text-xl font-medium'>{title}</h1>
          <p className='text-sm text-slate-800 lg:text-xs'>{text}</p>
          <div className='flex gap-6  items-center'>
            <button onClick={decreseItem} className='bg-theme-cart text-white  rounded  px-2 py-0.5 my-3 flex items-center justify-center text-sm active:scale-90'>-</button>
            <button className='bg-theme-cart text-white  rounded  px-2 py-0.5 my-3 flex items-center justify-center text-sm active:scale-90'>{cartQuantity}</button>
            <button onClick={increseItem} className='bg-theme-cart text-white  rounded  px-2 py-0.5 my-3 flex items-center justify-center text-sm active:scale-90'>+</button>
          </div>
        </div>

        <div className='flex flex-col gap-3'>
          <p className='text-slate-900 font-semibold'>${price}</p>
          <button onClick={onRemoveItem} className=' bg-theme-cart rounded p-1 lg:p-0.5 grid items-center justify-items-center cursor-pointer'>
          <TrashIcon className="w-5 h-5 text-white" />
          </button>
        </div>
       </div>
    </div>
  )
}

export default CartItem