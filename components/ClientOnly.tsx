'use client'

import { useEffect, useState } from 'react'
import AnimatedCursor from 'react-animated-cursor'

interface ClientOnly {
  children: React.ReactNode
}

const ClientOnly = ({ children }: ClientOnly) => {
  const [clientMounted, setClientMounted] = useState(false)

  useEffect(() => {
    setClientMounted(true)
  }, [])

  if (!clientMounted) return null

  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={33}
        color="255, 160, 1"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
      {children}
    </div>
  )
}

export default ClientOnly
