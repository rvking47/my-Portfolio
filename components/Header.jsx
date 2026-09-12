import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import profilePhoto from '@/assets/profilePhoto'

const Header = () => {
  return (
    <div id='top' className='w-11/12 max-w-5xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-5 pt-28 pb-14'>
      <motion.div
      initial={{scale: 0.85, opacity: 0}}
      whileInView={{scale: 1, opacity: 1}}
      transition={{duration: 0.8, type: 'spring', stiffness: 100}}
      className='relative'
      >
        <div className='absolute inset-0 rounded-full bg-black/10 blur-xl dark:bg-white/20'></div>
        <img src={profilePhoto} alt='Rahul Vimal' className='relative h-36 w-36 sm:h-40 sm:w-40 rounded-full object-cover object-top border-4 border-white shadow-xl dark:border-white/20' />
      </motion.div>
      <motion.h3 
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.6, delay: 0.3}}
      className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
            Hi! I'm Rahul Vimal <Image src={assets.hand_icon} alt='' className='w-6'/></motion.h3>
    <motion.h1 
    initial={{y: -30, opacity: 0}}
    whileInView={{y: 0, opacity: 1}}
    transition={{duration: 0.8, delay: 0.5}}
    className='text-4xl sm:text-6xl lg:text-[72px] font-Ovo leading-tight'>
        MERN Stack Developer</motion.h1>

        <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.7}}
        className='max-w-3xl mx-auto font-Ovo text-base sm:text-lg text-gray-700 dark:text-white/80'>
       I build responsive MERN applications with clean React interfaces, secure Node.js APIs, MongoDB workflows, real-time features, and practical AI integrations.
        </motion.p>

        <div className='flex flex-wrap justify-center gap-3 mt-2 text-sm text-gray-600 dark:text-white/70'>
          <span className='rounded-full border border-gray-300 px-4 py-1 dark:border-white/30'>React</span>
          <span className='rounded-full border border-gray-300 px-4 py-1 dark:border-white/30'>Next.js</span>
          <span className='rounded-full border border-gray-300 px-4 py-1 dark:border-white/30'>Node.js</span>
          <span className='rounded-full border border-gray-300 px-4 py-1 dark:border-white/30'>MongoDB</span>
          <span className='rounded-full border border-gray-300 px-4 py-1 dark:border-white/30'>Socket.io</span>
        </div>

        <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6, delay: 0.9}}
        className='grid grid-cols-3 gap-3 sm:gap-5 mt-3 text-center'>
          <div className='rounded-xl border border-gray-200 px-4 py-3 shadow-sm dark:border-white/10'>
            <p className='text-xl font-semibold'>7+</p>
            <p className='text-xs text-gray-600 dark:text-white/60'>Projects</p>
          </div>
          <div className='rounded-xl border border-gray-200 px-4 py-3 shadow-sm dark:border-white/10'>
            <p className='text-xl font-semibold'>MERN</p>
            <p className='text-xs text-gray-600 dark:text-white/60'>Stack</p>
          </div>
          <div className='rounded-xl border border-gray-200 px-4 py-3 shadow-sm dark:border-white/10'>
            <p className='text-xl font-semibold'>AI</p>
            <p className='text-xs text-gray-600 dark:text-white/60'>Workflows</p>
          </div>
        </motion.div>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-5'>
            <motion.a 
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1}}
            href="#contact"
            className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
            >Contact me <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.a>

            <motion.a 
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1.2}}
            href="/cv.pdf" download
            className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
                Download CV <Image src={assets.download_icon} alt='' className='w-4'/></motion.a>
        </div>

        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 1.3}}
        className='flex items-center justify-center gap-5 text-sm text-gray-600 dark:text-white/70'>
          <a href='https://github.com/rvking47' target='_blank' rel='noreferrer' className='hover:text-black dark:hover:text-white'>GitHub</a>
          <a href='https://www.linkedin.com/in/rahul09123/' target='_blank' rel='noreferrer' className='hover:text-black dark:hover:text-white'>LinkedIn</a>
          <a href='mailto:rvimal358@gmail.com' className='hover:text-black dark:hover:text-white'>Email</a>
        </motion.div>
    </div>
  )
}

export default Header
