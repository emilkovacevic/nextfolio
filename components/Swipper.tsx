'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper/modules'
import Image from 'next/image'
import { TESTIMONIALS_DATA } from '@/site_data'

export default function Swipper() {
  return (
    <Swiper
      pagination={{
        type: 'fraction'
      }}
      navigation
      autoplay
      loop
      modules={[Pagination, Navigation]}
      className="mySwiper "
    >
      {TESTIMONIALS_DATA.map((data) => (
        <SwiperSlide key={data.id}>
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-2xl font-medium">
                  &quot;{data.testimonial}&quot;
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <Image
                  width={800}
                  height={450}
                  className="object-cover w-20 h-20 rounded-full"
                  src={data.imageUrl}
                  alt={data.name}
                />
                <div className="flex items-center divide-x-2 divide-border">
                  <div className="pr-3 font-medium">{data.name}</div>
                  <div className="pl-3 text-sm font-light text-primary">
                    {data.position}
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
