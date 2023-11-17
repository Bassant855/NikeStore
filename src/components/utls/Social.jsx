import React from 'react'

const Social = ({icon}) => {
  return (
    <div>
        <img src={icon} className='w-8 h-8 flex justify-items-center items-center cursor-pointer hover:scale-110 duration-200 transition-all
        md:w-6 md:h-6 sm:w-5 sm:h-5' />
    </div>
  )
}

export default Social