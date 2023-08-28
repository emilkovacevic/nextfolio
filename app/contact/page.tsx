import PageHeader from '@/components/PageHeader'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { CONTACT_PAGE_DATA } from '@/site_data'

const page = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container px-4 mx-auto md:px-0">
        {/*  Header: Contact Me  */}
        <PageHeader
          heading={CONTACT_PAGE_DATA.heading}
          subheading={CONTACT_PAGE_DATA.subheading}
        />

        {/*  Social Media Links  */}
        <div className="flex flex-wrap mb-8 justify-evenly">
          <a
            href={CONTACT_PAGE_DATA.facebook}
            className="m-2 md:text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex gap-2">
              {' '}
              <Facebook />
              <span>Facebook</span>
            </div>
          </a>
          <a
            href={CONTACT_PAGE_DATA.instagram}
            className="m-2 md:text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex gap-2">
              <Instagram />
              <span>Instagram</span>
            </div>
          </a>
          <a
            href={CONTACT_PAGE_DATA.linkedin}
            className="m-2 md:text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex gap-2">
              <Linkedin />
              <span>LinkedIn</span>
            </div>
          </a>
        </div>
        {/*  Contact Form  */}
        <div className="p-8 mb-6 rounded-md shadow-lg bg-card">
          <form action="your_server_endpoint_here" method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-lg font-medium">
                Name:
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="w-full p-2 border rounded-md"
                />
              </label>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-lg font-medium">
                Email:
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="johndoe@example.com"
                  className="w-full p-2 border rounded-md"
                />
              </label>
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block mb-2 text-lg font-medium"
              >
                Message:
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full p-2 border rounded-md"
                />
              </label>
            </div>
            <button
              type="submit"
              className="px-6 py-2 rounded-md bg-primary text-primary-foreground"
            >
              Send Message
            </button>
          </form>
        </div>

        {/*  Google Maps Embed  */}
        <div className="mb-8">
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
