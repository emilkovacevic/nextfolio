import PageHeader from '@/components/PageHeader'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { CONTACT_PAGE_DATA } from '@/site_data'
import ContactForm from '@/components/ContactForm'

const page = () => {
  return (
    <main className="min-h-screen py-6 bg-background text-foreground">
      <div className="container px-4 mx-auto md:px-0">
        {/*  Header: Contact Me  */}
        <PageHeader
          heading={CONTACT_PAGE_DATA.heading}
          subheading={CONTACT_PAGE_DATA.subheading}
        />

        {/*  Social Media Links  */}
        <div className="flex flex-wrap gap-2 mb-8 justify-evenly">
          <a
            href={CONTACT_PAGE_DATA.facebook}
            className="md:text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex gap-2">
              {' '}
              <Facebook />
              <span className="hidden sm:inline-block">Facebook</span>
            </div>
          </a>
          <a
            href={CONTACT_PAGE_DATA.instagram}
            className="md:text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex gap-2">
              <Instagram />
              <span className="hidden sm:inline-block">Instagram</span>
            </div>
          </a>
          <a
            href={CONTACT_PAGE_DATA.linkedin}
            className="md:text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex gap-2">
              <Linkedin />
              <span className="hidden sm:inline-block">LinkedIn</span>
            </div>
          </a>
        </div>

        {/*  Contact Form  */}
        <div className="p-2 mb-6 rounded-md shadow-lg md:p-8 bg-card">
          <ContactForm />
        </div>

        {/*  Google Maps Embed  */}
        <div>
          <iframe
            title="location"
            src={CONTACT_PAGE_DATA.embedded_location}
            width="600"
            height="450"
            loading="lazy"
            className="w-full"
          />
        </div>
      </div>
    </main>
  )
}

export default page
