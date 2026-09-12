'use client'
import { useEffect, useRef } from 'react'

export default function Effects() {
  const progress = useRef(null)
  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)')
    const fine = matchMedia('(hover: hover) and (pointer: fine)')
    let frame = 0
    let active = null
    const update = () => {
      frame = 0
      const total = document.documentElement.scrollHeight - innerHeight
      progress.current.style.transform = `scaleX(${total > 0 ? scrollY / total : 0})`
    }
    const scroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    const reset = () => { active?.style.removeProperty('transform'); active = null }
    const move = (event) => {
      if (reduced.matches || !fine.matches) { reset(); return }
      const target = event.target.closest('[data-tilt]')
      if (target !== active) reset()
      if (!target) return
      active = target
      const rect = target.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      target.style.transform = `perspective(800px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`
    }
    update()
    window.addEventListener('scroll', scroll, { passive: true })
    document.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerleave', reset)
    reduced.addEventListener('change', reset)
    return () => {
      cancelAnimationFrame(frame)
      reset()
      window.removeEventListener('scroll', scroll)
      document.removeEventListener('pointermove', move)
      document.removeEventListener('pointerleave', reset)
      reduced.removeEventListener('change', reset)
    }
  }, [])
  return <div ref={progress} className='scroll-progress' aria-hidden='true' />
}
