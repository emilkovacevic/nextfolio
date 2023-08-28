'use client'

import { useEffect, useState } from 'react'
import { Progress } from './ui/progress'

export function ProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const scrollY = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const { scrollY } = window
      const scrollPercentage = (scrollY / totalHeight) * 100
      setProgress(scrollPercentage)
    }

    window.addEventListener('scroll', scrollY)

    return () => {
      window.removeEventListener('scroll', scrollY)
    }
  }, [])

  return (
    <Progress
      value={progress}
      className={`${
        !progress ? 'h-0' : 'h-1'
      } fixed top-0 z-[999] bg-transparent`}
    />
  )
}
