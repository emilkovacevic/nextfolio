import Image from 'next/image'
import { BLOG_ARTICLE_DATA } from '@/site_data'
import { formatDate } from '@/lib/date-format'
import Link from 'next/link'

const page = () => {
  // create new article publish date
  const dateNow = new Date()
  formatDate(dateNow)
  return (
    <div className="flex flex-col tracking-wider lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full p-4 lg:w-1/4">
        <div className="sticky space-y-2 top-4">
          <h3 className="text-lg font-semibold">Contents</h3>
          {BLOG_ARTICLE_DATA.sections.map((section) => (
            <Link
              href={`#${section.id}`}
              key={section.id}
              className="block hover:text-blue-500"
            >
              {section.title}
            </Link>
          ))}
        </div>
      </aside>

      {/* Main content */}
      <main className="w-full p-4 lg:w-3/4 bg-card">
        <h1 className="mb-4 text-3xl font-bold">{BLOG_ARTICLE_DATA.title}</h1>
        <div className="flex items-center mb-8 space-x-2">
          <Image
            width={895}
            height={552}
            src={BLOG_ARTICLE_DATA.author.image}
            alt={BLOG_ARTICLE_DATA.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div>{BLOG_ARTICLE_DATA.author.name}</div>
            <div className="text-sm">
              {formatDate(dateNow)}

              {/* date can be added from here */}
              {/* {articleData.publishDate} */}
            </div>
          </div>
        </div>

        {BLOG_ARTICLE_DATA.sections.map((section) => (
          <section id={section.id} key={section.id} className="mb-6">
            <h2 className="mb-4 text-2xl font-semibold">{section.title}</h2>
            <p className="mb-4">{section.paragraph}</p>
            <Image
              width={895}
              height={552}
              src={section.image}
              alt={`Illustration for ${section.title}`}
              className="w-full mb-4 rounded-md"
            />
          </section>
        ))}

        <div className="space-x-2">
          {BLOG_ARTICLE_DATA.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-sm rounded-md text-primary bg-background"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 space-y-2">
          <h3 className="text-lg font-semibold">Related Links</h3>
          <ul>
            {BLOG_ARTICLE_DATA.links.map((link) => (
              <li key={link.id}>
                <Link
                  rel="noreferrer"
                  href={link.url}
                  className="text-primary hover:underline"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}

export default page
