'use client'
import { useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Work from "../components/Work";
import Effects from "../components/Effects";

export default function Home() {

 const [isDarkMode, setIsDarkMode] = useState(false);
 const [themeReady, setThemeReady] = useState(false);

 useEffect(()=>{
  let theme;
  try { theme = localStorage.getItem('theme') } catch {}
  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    setIsDarkMode(true)
  }else{
    setIsDarkMode(false)
  }
  setThemeReady(true)
 },[])

 useEffect(()=>{
    if (!themeReady) return;
    if(isDarkMode){
      document.documentElement.classList.add('dark');
    }else{
      document.documentElement.classList.remove('dark');
    }
    try { localStorage.setItem('theme', isDarkMode ? 'dark' : 'light') } catch {}
 },[isDarkMode, themeReady])

  return (
    <>
    <a className='skip-link' href='#main'>Skip to content</a>
    <Effects />
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <main id='main'>
    <Header isDarkMode={isDarkMode} />
    <About isDarkMode={isDarkMode} />
    <Services isDarkMode={isDarkMode} />
    <Work isDarkMode={isDarkMode} />
    <Contact isDarkMode={isDarkMode} />
    </main>
    <Footer isDarkMode={isDarkMode} />
    </>
  );
}
