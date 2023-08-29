'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
import React, { ReactNode } from 'react'

interface SwipperProps {
  children: ReactNode
}

export default function Swipper({ children }: SwipperProps) {
  return (
    <Swiper
      pagination={{
        type: 'fraction'
      }}
      navigation
      autoplay={{
        pauseOnMouseEnter: true,
        delay: 2500,
        disableOnInteraction: false
      }}
      loop
      modules={[Pagination, Navigation]}
      className="mySwiper "
    >
      {React.Children.map(children, (child: ReactNode) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
    </Swiper>
  )
}
