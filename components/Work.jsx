import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = ({isDarkMode}) => {
  return (
    <div
    id='work' className='w-full px-6 sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20'>

      <h4
      className='text-center mb-2 text-lg font-Ovo'>
      My projects</h4>

      <h2
      className='text-center text-5xl font-Ovo'>
      Latest Work</h2>

      <p
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
     A focused collection of production work and MERN projects covering AI automation, real-time apps, dashboards, and responsive business websites.</p>

    <div
    className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 dark:text-black'>
        {workData.map((project, index)=>(
            <div
            key={index}
            className='min-h-72 sm:min-h-80 rounded-lg relative group overflow-hidden border border-gray-200 shadow-sm dark:border-white/10'>
                <Image src={project.bgImage} alt={project.title} fill sizes='(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw' className='object-cover' />
                <div className='absolute inset-0 bg-black/10 opacity-0 transition duration-500 group-hover:opacity-100'></div>
                <div className='bg-white w-11/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-4 flex items-center justify-between gap-3 duration-500 group-hover:bottom-7 shadow-lg'>
                    <div>
                        <a href={project.link} target='_blank' rel='noreferrer'><h2 className='font-semibold leading-5'>{project.title}</h2>
                        <p className='text-sm text-gray-700 leading-5 mt-1'>{project.description}</p></a>
                    </div>
                    <div className='border rounded-full border-black w-9 min-w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                      <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                    </div>
                </div>
                
            </div>
        ))}
    </div>

    <a
    href="https://github.com/rvking47" target='_blank' rel='noreferrer' className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-16 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
        View GitHub
        <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4'/>
    </a>

    </div>
  )
}

export default Work
