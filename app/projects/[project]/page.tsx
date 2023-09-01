import Swipper from '@/components/Swipper'
import Image from 'next/image'
import { headers } from 'next/headers'
import { PROJECT_PAGE_DATA } from '@/website_data'
import { notFound } from 'next/navigation'

const page = () => {
  const headersList = headers()
  const activePath = headersList.get('next-url')?.split('/').pop()
  const projectName = decodeURIComponent(activePath || '')
  const project = PROJECT_PAGE_DATA.projects.find(
    (p) => p.title === projectName
  )

  if (!project) {
    return notFound()
  }

  return (
    <main className="max-w-4xl mx-auto tracking-wider">
      <h1 data-aos="fade-right" className="mb-4 text-3xl font-bold">
        {project.title}
      </h1>
      <p data-aos="fade-left" className="mb-4">
        {project.description}
      </p>
      <div data-aos="zoom-in">
        <Image
          src={project.image}
          alt="cover photo"
          width={895}
          height={552}
          loading="lazy"
          className="object-cover w-full h-auto my-10"
        />
      </div>
      <p data-aos="fade-right" className="mb-4">
        {project.description}
      </p>

      <div>
        <h2 data-aos="fade-up" className="my-10 text-2xl font-semibold">
          Featured Content
        </h2>
        <Swipper>
          {project.features.map((card) => (
            <div key={card.id} data-aos="fade-up" className="pb-10 mx-auto">
              <div className="relative">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={895}
                  height={395}
                  loading="lazy"
                  className="object-cover object-center w-full h-auto"
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

export default page
