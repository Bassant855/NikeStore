import React from 'react'
import Clips from './utls/Clips'
import Social from './utls/Social'

const Hero = ({heroapi: {title, subtitle, img, btntext,videos,sociallinks}}) => {
  
  return (
    <div className='relative h-auto w-auto flex flex-col'>
        <div className='bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh]
        sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10'></div>
        <div className='relative z-20 opacity-100 grid
         items-center justify-items-center nike-container'>
            <div className='grid items-center justify-items-center
            mt-28 md:mt-24'>
                <h1 className='text-slate-200 font-extrabold text-6xl
                lg:text-4xl md:text-4xl sm:text-3xl xsm:text-2xl drop-shadow-sm  '>{title}</h1>
                <h1 className=' font-extrabold text-6xl drop-shadow-sm
                lg:text-4xl md:text-4xl sm:text-3xl xsm:text-2xl text-slate-200'>{subtitle}</h1>
                <button type='button' className='button-theme bg-slate-200 shadow-slate-200
                rounded-xl my-5'>{btntext}</button>
                 <div className='grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh]
                  left-[11%] xl:left-0 w-auto h-auto'>
              {videos?.map((val, i) => (
                <Clips
                  key={i}
                  imgsrc={val.imgsrc}
                  clip={val.clip}
                />
              ))}
            </div>
            <div className='grid items-center gap-3 md:gap-3 absolute top-[33vh] lg:top-[27vh]
                  right-[1%] xl:right-0 w-auto h-auto '>
                {sociallinks?.map((val, i) => (
                    <Social key={i}
                    icon = {val.icon} />
                ))}
            </div>
            </div>
            <div>
                <img src={img} alt="heroImg" className='transitions-theme w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh]
                xsm:h-[19vh] -rotate-[25deg] hover:rotate-0 object-fill'/>
            </div>
        </div>
       
    </div>
  )
}

export default Hero