import PageHeader from '@/components/PageHeader'
import { BLOG_PAGE_DATA } from '@/site_data'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className="min-h-screen py-6">
      <div className="container px-4 mx-auto md:px-0">
        {/*  Header: Blogs  */}
        <PageHeader
          heading={BLOG_PAGE_DATA.heading}
          subheading={BLOG_PAGE_DATA.subheading}
        />

        {/*  Blog Posts  */}
        <main className="flex flex-wrap items-stretch gap-4 my-10">
          {BLOG_PAGE_DATA.blogs.map((post) => (
            <section
              key={post.id}
              data-aos="fade-up"
              data-aos-once="true"
              className="flex flex-col max-w-md mx-auto overflow-hidden rounded shadow-md bg-card hover:shadow-lg"
            >
              <Image
                className="w-full h-80"
                src={post.image}
                alt={post.title}
                width={450}
                height={250}
              />

              <div className="flex flex-col justify-between p-4 ">
                <h2 className="mb-4 text-3xl font-semibold">{post.title}</h2>

                <div>
                  <span className="block mb-2 grow text-muted-foreground text-md">
                    Published on: {post.published_on}
                  </span>
                  <p className="mb-4">{post.description}</p>
                </div>
                <Link
                  href="blogs/blog_post_link_1.html"
                  className="pt-2 text-center text-primary hover:underline"
                >
                  Read More
                </Link>
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  )
}

export default page
