import Swipper from '@/components/Swipper'
import Image from 'next/image'
import { PROJECT_PAGE_DATA } from '@/website_data'
import { notFound } from 'next/navigation'

export default async function Page({
  params
}: {
  params: { project: string }
}) {
  const Project = PROJECT_PAGE_DATA.projects.find(
    (p) => p.url === params.project
  )

  if (!Project) {
    return notFound()
  }

  return (
    <main className="max-w-4xl mx-auto tracking-wider">
      <h1 data-aos="fade-right" className="mb-4 text-3xl font-bold">
        {Project?.title}
      </h1>
      <p data-aos="fade-left" className="mb-4">
        {Project?.description}
      </p>
      <div data-aos="zoom-in">
        <Image
          src={Project?.image}
          alt="cover photo"
          width={895}
          height={552}
          loading="lazy"
          sizes="(max-wdith: 768px) 50vh, (max-wdith: 1200px) 30vh, 20vh"
          className="object-cover w-full h-full my-10"
        />
      </div>
      <p data-aos="fade-right" className="mb-4">
        {Project.description}
      </p>

      <div>
        <h2 data-aos="fade-up" className="my-10 text-2xl font-semibold">
          Featured Content
        </h2>
        <p data-aos="fade-left" className="mb-4">
          {Project.description}
        </p>
        <Swipper>
          {Project.features.map((card) => (
            <div key={card.id} data-aos="fade-up" className="pb-10 mx-auto">
              <div className="relative">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={895}
                  height={395}
                  loading="lazy"
                  className="object-cover object-center w-full h-full max-h-96"
                />
                <div className="absolute top-0 left-0 z-30 bottom-10 flex flex-col justify-center w-full h-full px-[10%] bg-black/60 text-white ">
                  <h3 className="mt-4 text-xl font-bold">{card.title}</h3>
                  <h4 className="mt-2 font-semibold">{card.subtitle}</h4>
                  <p className="mt-2 font-medium">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Swipper>
      </div>
    </main>
  )
}
