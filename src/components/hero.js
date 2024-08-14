import React from 'react'
import Button from './Buttons/button'
import './hero.css'
import Services from './services'

const Hero = () => {
  return (
    <section className='bg-primary pb-[380px] mb-[440px] relative'>
        <div className='container flex flex-col items-center justify-center '>
            <h1 className='capitalize text-[155px] text-[#41BAE3] font-bold pointer-events-none'>Eco Concern</h1>
            <div className=' w-full flex justify-between items-center'>
                <div className='w-1/2 flex flex-col space-y-10'>
                    <h2 className='leading-[80px]'>Initiate the safe drinking campaign with us</h2>
                    <Button text="contact us" path="/contact" />
                </div>
                <picture className='relative'>
                  <img src="water_glass.png" alt="glass-water" width={500} height={500}/>
                </picture>
            </div>
        </div>
      <Services />
    </section>
  )
}

export default Hero