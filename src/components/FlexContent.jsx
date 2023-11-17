import React from 'react'

const FlexContent = ({ifExists, endpoint:{heading,title, text, btn , url, img}}) => {
  return (
    <div className={`flex items-center justify-between lg:justify-center nike-container gap-5 lg:flex-col
      ${ifExists ? 'flex-row-reverse' : ''}`}>
      <div className='w-full lg:max-w-none max-w-lg md:text-center grid items-center lg:justify-items-center' >
        <h1 className='text-gradient font-bold text-4xl sm:text-3xl'>{heading}</h1>
        <h1 className='font-bold text-slate-900 text-5xl lg:text-4xl md:text-3xl sm:text-2xl
        filter drop-shadow-lg'>{title}</h1>
        <p className='text-md xl:text-sm text-slate-900 my-4'>{text}</p>
        <a href={url} target='_blank' className='flex items-center'>
          <button className='button-theme bg-slate-900 text-slate-100 shadow-slate-900'>{btn}</button>
        </a>
        
      </div>
      <div className='flex items-center justify-center max-w-xl relative lg:max-w-none w-full'>
        <img src={img} alt="" className='w-auto object-fit rotate-6 hover:-rotate-1 transitions-theme
        h-60 lg:h-65 md:h-52 sm:h-44 xsm:h-36'/>
      </div>
    </div>
  )
}

export default FlexContent