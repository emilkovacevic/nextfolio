const page = () => {
  return (
    <main
      data-aos="fade-up"
      className="min-h-screen p-6 bg-background text-foreground"
    >
      <div className="container px-4 mx-auto md:px-0">
        {/*  Header: Projects  */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold">Projects</h1>
          <p className="text-xl text-secondary">Showcase of my work</p>
        </div>

        {/*  Project 1  */}
        <div className="p-8 mb-6 rounded-md shadow-lg bg-card">
          <h2 className="mb-4 text-3xl font-semibold">Project Name 1</h2>
          <p className="mb-4">
            Description of the project, what it does, who it&apos;s for, and any
            other pertinent details. This should provide an overview to anyone
            unfamiliar with the project&apos;s purpose or functionality.
          </p>
          <div>
            <span className="inline-block p-2 m-1 rounded-full bg-primary text-primary-foreground">
              React
            </span>
            <span className="inline-block p-2 m-1 rounded-full bg-primary text-primary-foreground">
              Node.js
            </span>
            <span className="inline-block p-2 m-1 rounded-full bg-primary text-primary-foreground">
              MongoDB
            </span>
          </div>
        </div>

        {/*  Project 2  */}
        <div className="p-8 mb-6 rounded-md shadow-lg bg-card">
          <h2 className="mb-4 text-3xl font-semibold">Project Name 2</h2>
          <p className="mb-4">
            Another description for a different project. This one might involve
            other technologies or be built for a different platform. The
            description again provides context and clarity.
          </p>
          <div>
            <span className="inline-block p-2 m-1 rounded-full bg-primary text-primary-foreground">
              Vue.js
            </span>
            <span className="inline-block p-2 m-1 rounded-full bg-primary text-primary-foreground">
              Firebase
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page
