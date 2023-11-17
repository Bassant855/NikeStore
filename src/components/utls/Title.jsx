import React from 'react'

const Title = ({title}) => {
  return (
    <div className='grid items-center'>
      <h1 className='font-bold text-5xl lg:test-4xl md:text-3xl
      text-slate-900 filter drop-shadow-lg'>{title}</h1>
    </div>
  )
}

export default Title