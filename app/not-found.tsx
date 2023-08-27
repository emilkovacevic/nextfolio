import Link from 'next/link'

const notFound = () => {
  return (
    <main className="container px-4 mx-auto md:px-0">
      <div className="max-w-md p-8 mx-auto text-center rounded-md shadow-lg bg-card">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-6">Page Not Found</p>
        <Link href="/" className="text-primary hover:underline">
          Go Back
        </Link>
      </div>
    </main>
  )
}

export default notFound
