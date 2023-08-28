import PageHeader from '@/components/PageHeader'
import Swipper from '@/components/Swipper'
import { PROFILE_PAGE_DATA } from '@/site_data'
import Image from 'next/image'

const page = () => {
  return (
    <div className="min-h-screen p-6 bg-background text-foreground">
      <PageHeader
        heading={PROFILE_PAGE_DATA.heading}
        subheading={PROFILE_PAGE_DATA.subheading}
      />
      <main>
        {/* Profile Card */}
        <div className="flex flex-wrap rounded shadow-lg bg-card">
          <Image
            width={800}
            height={450}
            src={PROFILE_PAGE_DATA.image}
            alt={PROFILE_PAGE_DATA.name}
            className="object-cover rounded-t md:w-1/3 h-80 w-fit"
          />
          <div className="grid content-center p-4 md:w-2/3">
            <div>
              <h2 className="my-2 text-4xl font-bold">
                {PROFILE_PAGE_DATA.name}
              </h2>
              <p className="my-2 text-2xl text-muted-foreground">
                {PROFILE_PAGE_DATA.title}
              </p>
              <p className="text-xl text-muted-foreground">
                {PROFILE_PAGE_DATA.message}
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Contact Information Card */}
          <div className="flex flex-col p-4 rounded shadow-lg bg-card">
            <h2 className="mb-4 text-2xl font-semibold">Contact Information</h2>
            <div className="space-y-2">
              <p>
                <a
                  href={`mailto:${PROFILE_PAGE_DATA.contact.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Email: {PROFILE_PAGE_DATA.contact.email}
                </a>
              </p>
              <p>
                Phone:
                <a
                  href={`tel:${PROFILE_PAGE_DATA.contact.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {PROFILE_PAGE_DATA.contact.phone}
                </a>
              </p>
              <p>
                Location:
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${PROFILE_PAGE_DATA.contact.location}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {PROFILE_PAGE_DATA.contact.location}
                </a>
              </p>
              <p>
                LinkedIn:
                <a
                  href={PROFILE_PAGE_DATA.contact.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {PROFILE_PAGE_DATA.contact.linkedIn}
                </a>
              </p>
              <p>
                GitHub:
                <a
                  href={PROFILE_PAGE_DATA.contact.gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {PROFILE_PAGE_DATA.contact.gitHub}
                </a>
              </p>
            </div>
          </div>

          {/* Education Card */}
          <div className="flex flex-col p-4 rounded shadow-lg bg-card">
            <h2 className="mb-4 text-2xl font-semibold">Education</h2>
            {PROFILE_PAGE_DATA.education.map((edu) => (
              <div key={edu.id} className="mb-4 space-y-2">
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <p className="text-muted-foreground">
                  {edu.institution}, {edu.year}
                </p>
              </div>
            ))}
          </div>

          {/* Skills Card */}
          <div className="flex flex-col p-4 rounded shadow-lg bg-card">
            <h2 className="mb-4 text-2xl font-semibold">Skills</h2>
            <ul className="space-y-2">
              {PROFILE_PAGE_DATA.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* Work Experience Card */}
        <section className="flex flex-col w-full p-4 mt-10 rounded shadow-lg bg-card">
          <h2 className="p-8 my-2 text-4xl font-bold text-center">
            Work Experience
          </h2>
          {PROFILE_PAGE_DATA.workExperience.map((work) => (
            <div key={work.id} className="mb-4">
              <h3 className="text-xl font-bold">{work.position}</h3>
              <p className="text-muted-foreground">
                {work.company}, {work.year}
              </p>
              <ul className="pl-5 list-disc">
                {work.responsibilities.map((resp) => (
                  <li key={resp}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <section className="mt-10 shadow-lg bg-card text-card-foreground">
          <h2 className="p-8 my-2 text-4xl font-bold text-center">
            What clients say?
          </h2>
          <Swipper />
        </section>
      </main>
    </div>
  )
}

export default page
