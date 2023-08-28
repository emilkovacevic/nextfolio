'use client'

import React, { useState, useEffect } from 'react'
import { ArrowBigUpDash } from 'lucide-react'
import { Button } from './ui/button'

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 20 ? setVisible(true) : setVisible(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [visible])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    visible && (
      <Button
        type="button"
        onClick={scrollToTop}
        className="fixed z-50 p-2 transition rounded-full shadow-lg bottom-4 right-4 md:bottom-6 md:right-6 focus:outline-none"
      >
        <ArrowBigUpDash />
      </Button>
    )
  )
}

export default ScrollToTopButton
