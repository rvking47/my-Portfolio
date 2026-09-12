import { assets } from '@/assets/assets'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const links = [['top', 'Home'], ['about', 'About'], ['services', 'Services'], ['work', 'Projects'], ['contact', 'Contact']]
export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const [open, setOpen] = useState(false)
  const trigger = useRef(null)
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') { setOpen(false); trigger.current?.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])
  return (
    <nav aria-label='Main navigation' className='site-nav'>
      <a href='#top' aria-label='Rahul home' className='text-2xl font-bold'>Rahul<span className='text-emerald-600'>.</span></a>
      <ul className='hidden md:flex gap-6'>
        {links.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
      </ul>
      <div className='flex gap-2'>
        <button className='nav-control' aria-label={isDarkMode ? 'Use light theme' : 'Use dark theme'} onClick={() => setIsDarkMode(value => !value)}>
          <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
        </button>
        <button ref={trigger} className='nav-control md:hidden' aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls='mobile-menu' onClick={() => setOpen(value => !value)}>
          <Image src={open ? (isDarkMode ? assets.close_white : assets.close_black) : (isDarkMode ? assets.menu_white : assets.menu_black)} alt='' className='w-6' />
        </button>
      </div>
      <ul id='mobile-menu' hidden={!open} className='mobile-menu md:hidden'>
        {links.map(([id, label]) => <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)}>{label}</a></li>)}
      </ul>
    </nav>
  )
}
