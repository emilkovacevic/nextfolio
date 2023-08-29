'use client'

import { useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      delay: 100,
      once: true
    })
  }, [])

  return null
}
