import Link from 'next/link'

import { HOME_PAGE_DATA } from '@/website_data'
import TagsCloud from '@/components/TagsCloud'
import { MoveRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className="mr-auto place-self-center lg:col-span-7">
        {/* Render Introduction */}
        <h2
          data-aos="fade-down"
          className="relative flex max-w-2xl mb-4 text-xl font-extrabold leading-none tracking-tight md:text-3xl xl:text-4xl text-secondary-foreground"
        >
          <span className="block h-[1px] w-screen bg-accent-foreground absolute -translate-x-full -left-2 top-[50%]" />
          Hi, I&apos;m
          <span className="ml-2" />
          {HOME_PAGE_DATA.name.map((char) => (
            <span
              key={char.id}
              data-aos="fade-in"
              data-aos-delay={`${200 + char.id * 200}`}
              className="hover:zoom-in-out"
            >
              {char.letter}
            </span>
          ))}
          ,
        </h2>
        <h1 className="max-w-4xl mb-4 text-2xl font-extrabold leading-relaxed tracking-wider break-words md:text-4xl xl:text-6xl text-secondary-foreground">
          {HOME_PAGE_DATA.role.map((word) => (
            <div key={word.id} className="flex flex-wrap">
              {word.title.map((char) => (
                <span
                  key={char.id}
                  data-aos="fade-up"
                  data-aos-delay={`${200 + char.id * 200}`}
                  className="hover:squize-letter"
                >
                  {char.letter}
                </span>
              ))}
            </div>
          ))}
        </h1>
        <p
          data-aos="fade"
          data-aos-delay="1000"
          className="max-w-2xl mb-6 font-light text-secondary-foreground lg:mb-8 md:text-lg lg:text-xl"
        >
          {HOME_PAGE_DATA.introduction}
        </p>

        {/* Added contact details */}
        <div data-aos="fade" data-aos-delay="1100" className="mb-8">
          {HOME_PAGE_DATA.contact.map((item) => (
            <p key={item.type}>
              {item.type}:{' '}
              <a
                href={item.link}
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {item.value}
              </a>
            </p>
          ))}
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="1200"
          className="flex gap-2 md:gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center border rounded-lg hover:border-accent-foreground text-popover-foreground bg-popover focus:ring-4 focus:ring-primary"
          >
            Contact Me
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center border rounded-lg hover:border-accent-foreground text-popover-foreground bg-popover focus:ring-4 focus:ring-primary"
          >
            About me
            <span className="ml-2">
              <MoveRight />
            </span>
          </Link>
        </div>
      </div>
      <div
        data-aos="fade-left"
        className="hidden lg:mt-0 lg:col-span-5 lg:flex"
      >
        <TagsCloud tags={HOME_PAGE_DATA.hero_tags} />
      </div>
    </main>
  )
}
