import { assets, certificateData, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = ({isDarkMode}) => {
  return (
    <div id='about' className='w-full px-6 sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20'
    >
      <h4
      className='text-center mb-2 text-lg font-Ovo'>
        Introduction</h4>

      <h2
      className='text-center text-5xl font-Ovo'>
        About me</h2>

        <div
        className='flex w-full flex-col lg:flex-row items-center gap-10 lg:gap-20 my-12 lg:my-20'>
            <div
            data-tilt className='w-56 sm:w-72 shrink-0 max-w-full'>
                <Image src='/rahul.webp' width={505} height={606} sizes='(max-width: 640px) 224px, 288px' alt='Rahul Vimal' className='w-full rounded-lg'/>
            </div>
            <div
            className='flex-1 min-w-0'>
                <p className='mb-8 max-w-2xl font-Ovo text-gray-700 dark:text-white/80'
                >I am Rahul Vimal, a MERN Stack Developer working on production web applications at Codemaya. I enjoy building clean interfaces, scalable APIs, MongoDB-backed workflows, real-time Socket.io features, and AI automation features that solve real product problems.</p>

                <ul
                className='grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl'>
                    {infoList.map(({icon, iconDark, title, description}, index)=>(
                        <li
                        className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                         key={index}>
                            <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3'/>
                            <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                            <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                        </li>
                    ))}
                </ul>

                <div
                className='mt-8 max-w-3xl rounded-2xl border border-gray-300 p-5 dark:border-white/20'>
                    <h4 className='mb-4 font-semibold text-gray-800 dark:text-white'>Certificates</h4>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        {certificateData.map((certificate, index)=>(
                            <div key={index} className='rounded-xl bg-gray-50 p-4 dark:bg-darkHover/30'>
                                <p className='font-medium text-gray-800 dark:text-white'>{certificate.title}</p>
                                <p className='text-sm text-gray-600 dark:text-white/70'>{certificate.issuer}</p>
                                <p className='text-xs text-gray-500 dark:text-white/50'>{certificate.year}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <h4
                className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools I use</h4>

                <ul
                className='flex items-center gap-3 sm:gap-5 flex-wrap'>
                    {toolsData.map((tool, index)=>(
                        <li
                        className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                         key={index}>
                            <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About
