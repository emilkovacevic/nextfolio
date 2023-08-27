const page = () => {
  return (
    <main className="min-h-screen p-6 bg-background text-foreground">
      <div className="container px-4 mx-auto md:px-0">
        {/* <!-- Header: Blogs --> */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold">Blogs</h1>
          <p className="text-xl text-secondary">Thoughts, ideas, and stories</p>
        </div>

        {/* <!-- Blog Post 1 --> */}
        <div className="p-8 mb-6 rounded-md shadow-lg bg-card">
          <h2 className="mb-4 text-3xl font-semibold">Blog Post Title 1</h2>
          <p className="mb-4">
            A short introduction or excerpt of the first blog post. This gives
            readers an idea about what to expect from the full post.
          </p>
          <a
            href="blog_post_link_1.html"
            className="text-primary hover:underline"
          >
            Read More
          </a>
        </div>

        {/* <!-- Blog Post 2 --> */}
        <div className="p-8 mb-6 rounded-md shadow-lg bg-card">
          <h2 className="mb-4 text-3xl font-semibold">Blog Post Title 2</h2>
          <p className="mb-4">
            An intro for the second blog post. Each of these can be different
            lengths, but providing a teaser can entice readers to click through.
          </p>
          <a
            href="blog_post_link_2.html"
            className="text-primary hover:underline"
          >
            Read More
          </a>
        </div>
      </div>
    </main>
  )
}

export default page
