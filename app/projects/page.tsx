'use client'

import PageHeader from '@/components/PageHeader'
import Link from 'next/link'

const page = () => {
  return (
    <div className="min-h-screen p-6 bg-background text-foreground">
      {/*  Header: Projects  */}
      <PageHeader heading="Projects" subheading="Showcase of my work" />

      <main>
        <div className="container px-4 mx-auto md:px-0">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search Projects..."
            className="w-full p-2 mb-6 rounded-md shadow-sm"
            // Add event handling here for filtering
          />

          {/* Grid Layout for Projects */}
          <div
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
            data-aos="fade-up"
            data-aos-once="true"
          >
            {/*  Project 1  */}
            <Link href="/project-page-url">
              {' '}
              {/* Modify this URL */}
              <a target="_blank" rel="noopener noreferrer">
                <div className="p-8 transition-shadow duration-300 rounded-md shadow-lg bg-card hover:shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1682903316408-ef37087a9fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMzR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
                    alt="Project 1 Image"
                    className="w-full h-auto mb-4 rounded-md obj"
                  />
                  <h2 className="mb-4 text-3xl font-semibold">
                    Project Name 1
                  </h2>
                  <span className="block mb-2 text-sm text-gray-500">
                    Published on: MM-DD-YYYY
                  </span>
                  <p className="mb-4">
                    Description of the project, what it does, who it&apos;s for,
                    and any other pertinent details. This should provide an
                    overview to anyone unfamiliar with the project&apos;s
                    purpose or functionality.
                  </p>
                  <div>
                    <span className="inline-block p-2 m-1 border rounded-lg border-primary text-primary">
                      React
                    </span>
                    <span className="inline-block p-2 m-1 border rounded-lg border-primary text-primary">
                      Node.js
                    </span>
                    <span className="inline-block p-2 m-1 border rounded-lg border-primary text-primary">
                      MongoDB
                    </span>
                  </div>
                </div>
              </a>
            </Link>

            {/* Add more projects here with similar structure */}
          </div>
        </div>
      </main>
    </div>
  )
}

export default page
