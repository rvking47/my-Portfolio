import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div
    id="services" className='w-full px-6 sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20'>

       <h4
       className='text-center mb-2 text-lg font-Ovo'>
       What I offer</h4>

      <h2
      className='text-center text-5xl font-Ovo'>
      What I Build</h2>

      <p
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I turn product ideas into responsive interfaces, reliable backend APIs, and full-stack workflows that are easy to use and maintain.</p>

        <div
        className='grid grid-cols-auto gap-6 my-10'>
            {serviceData.map(({icon, title, description, link}, index)=>(
                <div
                key={index}
                className='border border-gray-300 rounded-lg px-6 sm:px-8 py-10 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-2 duration-500 dark:border-white/20 dark:hover:bg-darkHover dark:hover:shadow-white'>
                    <Image src={icon} alt='' className='w-10'/>
                    <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
                        {description}
                    </p>
                    <span className='flex items-center gap-2 text-sm mt-5'>
                        View focus <Image alt='' src={assets.right_arrow} className='w-4'/>
                    </span>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Services
