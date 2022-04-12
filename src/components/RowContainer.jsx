import React from 'react'
import { motion } from 'framer-motion'
import { MdShoppingBasket } from 'react-icons/md'

const RowContainer = ({flag, data}) => {
    console.log(data)
  return (
    <div className={`w-full my-12 ${flag ? 'overflow-x-scroll' : 'overflow-x-hidden'}`}>
        {data && data.map(item => (
            <div key={item.id} className='w-300 my-12 md:w-340 bg-cardOverlay rounded-lg p-2 h-auto backdrop-blur-lg hover:drop-shadow-lg'>
            <div className='w-full flex items-center justify-between'>
                <motion.img 
                whileHover={{ scale: 1.2 }}
                src={item.imageURL} alt={item.title} 
                className='w-40 -mt-8' />
                <motion.div
                whileTap = {{ scale: 0.75 }} 
                className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'>
                    <MdShoppingBasket className='text-white' />
                </motion.div>
            </div>

            <div className='w-full flex flex-col gap-4 items-end justify-end'>
                <p className='text-textColor font-semibold text-base md:text-lg'>
                    {item.title}
                </p>
                <p className='mt-1 text-sm text-gray-500'>{item.calories} Calories</p>
                <div className='flex items-center gap-8'>
                    <p className='text-lg text-headingColor font-semibold'><span className='text-sm text-red-500'>$</span>{item.price}</p>
                </div>
            </div>
        </div>
        ))}
    </div>
  )
}

export default RowContainer