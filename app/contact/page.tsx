import PageHeader from '@/components/PageHeader'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

const page = () => {
  return (
    <main className="min-h-screen p-6 bg-background text-foreground">
      <div className="container px-4 mx-auto md:px-0">
        {/*  Header: Contact Me  */}
        <PageHeader
          heading="Contact Me"
          subheading=" I'd love to hear from you!"
        />

        {/*  Social Media Links  */}
        <div className="flex flex-wrap mb-8 justify-evenly">
          <a
            href="https://facebook.com/your_username"
            className="m-2 text-2xl"
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
            href="https://instagram.com/your_username"
            className="m-2 text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex gap-2">
              <Instagram />
              <span>Instagram</span>
            </div>
          </a>
          <a
            href="https://linkedin.com/in/your_username"
            className="m-2 text-2xl"
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
          {/*  Replace the src with your desired location  */}
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835253385478!2d144.95373531589768!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af1176e6ed%3A0x4cb637568d8857e2!2sFlinders%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1630091720135!5m2!1sen!2sus"
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
