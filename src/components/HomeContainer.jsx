import React from 'react'
import Delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'
import { heroData } from '../utils/data'

const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
      <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
        <div className='flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full'>
          <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
          <div className='w-8 h-8 rounded-full overflow-hidden bg-white'>
            <img src={Delivery} 
            alt="delivery"
            className='w-full h-full object-contain' />
          </div>
        </div>

        <p className='text-[2.5rem] font-bold tracking-wide text-headingColor lg:text-[4.25rem]'>The Fastest Delivery in <span className='text-orange-600 text-[3rem]lg:text-[5rem]'>Your City</span></p>
        <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio laboriosam corporis, reiciendis repellendus dolores eaque? Aut, enim aperiam! Animi, exercitationem saepe. Earum eius laudantium, eligendi ratione fugiat inventore ipsam aliquid maiores cum placeat reprehenderit magnam!
        </p>

        <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out'>Order Now</button>
      </div>
      <div className='py-2 flex-1 flex items-center relative'>
            <img
            className='h-400 lg:h-650 lg:w-auto ml-auto' 
            src={HeroBg} alt="hero_bg" />

            <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center py-4 gap-4 flex-wrap drop-shadow-lg lg:px-32'>
              {heroData && heroData.map(n => (
                <div key={n.id} className='lg:w-190 p-4 bg-red-500 bg-cardOverlay backdrop-blur-md rounded-3xl flex items-center justify-center flex-col'>
                <img src={n.imageSrc}
                className='w-20 lg:w-40 -mt-10lg:-mt-20 ' 
                alt="" />
                <p className='text-base lg:text-xl font-semibold mt-2 lg:mt-4 text-textColor'>{n.name}</p>
                <p className='text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3'>{n.desc}</p>
                <p className='text-sm font-semibold text-headingColor'><span className='text-xs text-red-600 '>$ </span> {n.price}</p>
              </div>
              ))}
            </div>
        </div>
    </section>
  )
}

export default HomeContainer