import PageHeader from '@/components/PageHeader'
import { PROJECT_PAGE_DATA } from '@/website_data'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className="py-6">
      {/*  Header: Projects  */}
      <PageHeader
        heading={PROJECT_PAGE_DATA.heading}
        subheading={PROJECT_PAGE_DATA.subheading}
      />

      <main>
        <div className="mx-auto md:p-6">
          {/* Grid Layout for Projects */}
          <div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            data-aos="fade-up"
            data-aos-once="true"
          >
            {/*  Projects  */}
            {PROJECT_PAGE_DATA.projects.map((project) => (
              <Link
                className="p-4 transition-shadow duration-300 rounded-md shadow-lg bg-card hover:shadow-xl"
                key={project.id}
                href={`/projects/${project.url}`}
              >
                {/* Image Section */}
                <Image
                  src={project.image}
                  loading="lazy"
                  alt={project.title}
                  width={800}
                  height={450}
                  className="object-cover w-full h-full rounded-md max-h-52"
                />
                <h2 className="mt-4 text-lg md:text-2xl">{project.title}</h2>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default page
