import Swipper from '@/components/Swipper'
import { PROJECT_PAGE_DATA } from '@/site_data'
import Image from 'next/image'

const page = () => {
  return (
    <main className="max-w-4xl mx-auto tracking-wider">
      <h1 data-aos="fade-right" className="mb-4 text-3xl font-bold">
        {PROJECT_PAGE_DATA.projects[0].title}
      </h1>
      <p data-aos="fade-left" className="mb-4">
        {PROJECT_PAGE_DATA.projects[0].description}
      </p>
      <div data-aos="zoom-in">
        <Image
          src={PROJECT_PAGE_DATA.projects[0].image}
          alt="cover photo"
          width={800}
          height={450}
          className="w-full h-[450px] my-10 object-cover"
        />
      </div>
      <p data-aos="fade-right" className="mb-4">
        {PROJECT_PAGE_DATA.projects[0].description}
      </p>

      <div>
        <h2 data-aos="fade-up" className="my-10 text-2xl font-semibold">
          Featured Content
        </h2>
        <Swipper>
          {PROJECT_PAGE_DATA.projects.map((card) => (
            <div key={card.id} data-aos="fade-up" className="pb-10 mx-auto">
              <div className="relative">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={800}
                  height={450}
                  className="w-full h-80"
                />
                <div className="absolute top-0 left-0 z-30 bottom-10 flex flex-col justify-center w-full h-full px-[10%] bg-black/60 text-white ">
                  <h3 className="mt-4 text-xl font-bold">Feature {card.id}</h3>
                  <p className="mt-2 font-semibold">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Swipper>
      </div>
    </main>
  )
}

export default page
