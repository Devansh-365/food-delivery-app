import React, { useState, useEffect } from 'react'
import HomeContainer from './HomeContainer'
import { motion } from 'framer-motion'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import RowContainer from './RowContainer'
import { useStateValue } from '../context/StateProvider'
import MenuContainer from './MenuContainer'

const MainContainer = () => {
  const [{ foodItems }, dispatch] = useStateValue()
  const [scrollValue, setScrollValue] = useState(0)

  useEffect(() => {
  }, [scrollValue])

  return (
    <div className='w-full flex h-auto flex-col items-center justify-center'>
      <HomeContainer />
      <section className='w-full my-6'>
        <div className='w-full flex items-center justify-between'>
          <p className='text-2xl font-semibold capitalize relative text-headingColor before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-orange-500 trasnsition-all ease-in-out duration-100 before:bg-gradient-to-tr from-orange-400 to-orange-600'>Our fresh & healthy fruits</p>

          <div className='hidden md:flex gap-3 items-center'>
            <motion.div 
            onClick={() => setScrollValue(-200)}
            whileTap={{ scale:0.75 }}
            className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 flex items-center justify-center cursor-pointer '>
              <MdChevronLeft className='text-lg text-white' />
            </motion.div>
            <motion.div 
            onClick={() => setScrollValue(200 )}
            whileTap={{ scale:0.75 }}
            className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 flex items-center justify-center cursor-pointer transition-all duration-100 ease-in-out'>
              <MdChevronRight className='text-lg text-white' />
            </motion.div>
          </div>
        </div>
        <RowContainer
        scrollValue = {scrollValue}
        data={foodItems?.filter(n => n.category === 'snacks')} flag={true} />
      </section>

      <MenuContainer />
    </div>
  )
}

export default MainContainer