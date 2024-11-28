import React from 'react'
import { CARD_DATA } from '../common/Helper'

const Hero = () => {
  return (
    <div>
      <div className='flex text-center gap-5 p-5'>
        {CARD_DATA.map((data,i)=>(
          <div className='hover:shadow-2xl transition-all ease-in-out duration-300 rounded-xl p-5' key={i}>
          <img src={data.imgSrc} alt="data" />
          <h2 className='text-5xl'>{data.heading}</h2>
          <p className='text-xl mt-3'>{data.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero