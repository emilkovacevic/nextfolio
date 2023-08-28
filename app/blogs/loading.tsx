import { Skeleton } from '@/components/ui/skeleton'

const BlogLoader = () => {
  return (
    <main className="min-h-screen p-6 bg-background text-foreground">
      <div className="container px-4 mx-auto md:px-0">
        {/*  Header: Blogs  */}
        <div className="mb-8 text-center">
          <Skeleton className="w-1/2 h-12 mx-auto mt-6" />
          <Skeleton className="w-3/4 h-6 mx-auto mt-4" />
        </div>

        {/*  Blog Post Loader (generic)  */}
        <div className="p-8 mb-6 rounded-md shadow-lg bg-card">
          <Skeleton className="w-full mx-auto h-80" /> {/* Image loader */}
          <div className="mt-6">
            <Skeleton className="w-3/4 h-8 mb-4" /> {/* Title loader */}
            <Skeleton className="w-full h-6 mb-4" /> {/* Date loader */}
            <Skeleton className="w-2/3 h-6 mb-4" /> {/* Description loader */}
            <Skeleton className="w-1/4 h-6 mx-auto mt-4" />{' '}
            {/* "Read More" link loader */}
          </div>
        </div>
        {/*  Blog Post Loader (generic)  */}
        <div className="p-8 mb-6 rounded-md shadow-lg bg-card">
          <Skeleton className="w-full mx-auto h-80" /> {/* Image loader */}
          <div className="mt-6">
            <Skeleton className="w-3/4 h-8 mb-4" /> {/* Title loader */}
            <Skeleton className="w-full h-6 mb-4" /> {/* Date loader */}
            <Skeleton className="w-2/3 h-6 mb-4" /> {/* Description loader */}
            <Skeleton className="w-1/4 h-6 mx-auto mt-4" />{' '}
            {/* "Read More" link loader */}
          </div>
        </div>
        {/*  Blog Post Loader (generic)  */}
        <div className="p-8 mb-6 rounded-md shadow-lg bg-card">
          <Skeleton className="w-full mx-auto h-80" /> {/* Image loader */}
          <div className="mt-6">
            <Skeleton className="w-3/4 h-8 mb-4" /> {/* Title loader */}
            <Skeleton className="w-full h-6 mb-4" /> {/* Date loader */}
            <Skeleton className="w-2/3 h-6 mb-4" /> {/* Description loader */}
            <Skeleton className="w-1/4 h-6 mx-auto mt-4" />{' '}
            {/* "Read More" link loader */}
          </div>
        </div>
        {/*  Blog Post Loader (generic)  */}
        <div className="p-8 mb-6 rounded-md shadow-lg bg-card">
          <Skeleton className="w-full mx-auto h-80" /> {/* Image loader */}
          <div className="mt-6">
            <Skeleton className="w-3/4 h-8 mb-4" /> {/* Title loader */}
            <Skeleton className="w-full h-6 mb-4" /> {/* Date loader */}
            <Skeleton className="w-2/3 h-6 mb-4" /> {/* Description loader */}
            <Skeleton className="w-1/4 h-6 mx-auto mt-4" />{' '}
            {/* "Read More" link loader */}
          </div>
        </div>
      </div>
    </main>
  )
}

export default BlogLoader
