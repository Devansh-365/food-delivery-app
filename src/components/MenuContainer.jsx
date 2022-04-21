import React, { useState, useEffect } from 'react'
import {IoFastFood} from 'react-icons/io5'
import { categories } from '../utils/data'

const MenuContainer = () => {

   const [filter, setFilter] = useState('chicken')

   useEffect(() => {
   }, [filter])

  return (
    <section className='w-full my-6' id='menu'>
        <div className='w-full flex flex-col items-center justify-center'>
        <p className='text-2xl font-semibold capitalize relative text-headingColor before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-orange-500 trasnsition-all ease-in-out duration-100 before:bg-gradient-to-tr from-orange-400 to-orange-600 mr-auto'>Our Hot Dishes</p>

        <div className='w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none'>
        {categories && categories.map(category => (
            <div key={category.id} className={`group ${filter === category.urlParamName ? 'bg-cartNumBg' : 'bg-card'} bg-card w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-lg flex flex-col gap-3 items-center justify-center duration-150 transition-all ease-in-out hover:bg-cartNumBg`}
            onClick={() => setFilter(category.urlParamName)}>
            <div className={`w-10 h-10 rounded-full shadow-lg ${filter === category.urlParamName ? 'bg-card' : 'bg-cartNumBg'} group-hover:bg-white flex items-center justify-center`}>
                <IoFastFood className={`${filter === category.urlParamName ? 'text-textColor' : 'text-white'} text-card group-hover:text-textColor text-lg`} />
            </div>
            <p className='text-sm text-textColor group-hover:text-white'>{category.name}</p>
        </div>
        ))}
        </div>
        </div>
    </section>
  )
}

export default MenuContainer