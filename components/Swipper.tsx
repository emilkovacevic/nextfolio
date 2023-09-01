'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import React, { ReactNode } from 'react'

interface SwipperProps {
  children: ReactNode
}

const LeftArrow = () => <div className="swiper-custom-button-left">←</div>

const RightArrow = () => <div className="swiper-custom-button-right">→</div>

export default function Swipper({ children }: SwipperProps) {
  return (
    <Swiper
      navigation={{
        nextEl: '.swiper-custom-button-right',
        prevEl: '.swiper-custom-button-left'
      }}
      keyboard
      pagination={{
        type: 'fraction'
      }}
      loop
      autoplay={{
        delay: 4500
      }}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      <LeftArrow />
      <RightArrow />
      {React.Children.map(children, (child: ReactNode) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
    </Swiper>
  )
}
