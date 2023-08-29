import PageHeader from '@/components/PageHeader'
import { PROJECT_PAGE_DATA } from '@/site_data'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className="min-h-screen py-6 bg-background text-foreground">
      {/*  Header: Projects  */}
      <PageHeader
        heading={PROJECT_PAGE_DATA.heading}
        subheading={PROJECT_PAGE_DATA.subheading}
      />

      <main>
        <div className="container mx-auto md:px-0">
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
                href={`/projects/${project.title}`}
              >
                {/* Image Section */}
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="w-full h-56 rounded-md"
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
