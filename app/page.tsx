import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-primary-foreground">
            Software developer
          </h1>
          <p className="max-w-2xl mb-6 font-light text-secondary-foreground lg:mb-8 md:text-lg lg:text-xl">
            With 10 years of experience in the industry I can offer the best
            services.
          </p>

          {/* Added contact details */}
          <div className="mb-8">
            <p>
              Email:{' '}
              <a href="mailto:example@example.com" className="hover:underline">
                example@example.com
              </a>
            </p>
            <p>
              Phone:{' '}
              <a href="tel:+1234567890" className="hover:underline">
                +123 456 7890
              </a>
            </p>
            <p>
              Address:{' '}
              <a
                href="https://www.google.com/maps/search/?api=1&query=123+Main+St,+City,+Country+12345"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                123 Main St, City, Country 12345
              </a>
            </p>
          </div>

          <div className="flex gap-2 md:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg hover:text-secondary-foreground border-accent text-accent bg-accent-foreground focus:ring-4 focus:ring-accent-foreground"
            >
              Contact me
            </Link>
            <Link
              href="/info"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg text-popover-foreground bg-popover focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Learn more
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            width={400}
            height={400}
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </div>
      </div>
    </main>
  )
}
