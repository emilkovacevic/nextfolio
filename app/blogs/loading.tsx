import { Skeleton } from '@/components/ui/skeleton'

const BlogLoader = () => {
  return (
    <main className="min-h-screen p-6 bg-background text-foreground">
      <div className="container px-4 mx-auto md:px-0">
        {/*  Header: Blogs  */}
        <div className="mb-8 text-center">
          <Skeleton className="w-1/2 h-12 mx-auto" />
          <Skeleton className="w-3/4 h-6 mx-auto mt-4" />
        </div>

        {/*  Blog Post 1  */}
        <div className="p-8 mb-6 rounded-md shadow-lg bg-card">
          <Skeleton className="w-3/4 h-8 mb-4" />
          <Skeleton className="w-full h-6 mb-4" />
          <Skeleton className="w-1/4 h-6 mb-4" />
        </div>

        {/*  Blog Post 2  */}
        <div className="p-8 mb-6 rounded-md shadow-lg bg-card">
          <Skeleton className="w-3/4 h-8 mb-4" />
          <Skeleton className="w-full h-6 mb-4" />
          <Skeleton className="w-1/4 h-6 mb-4" />
        </div>
      </div>
    </main>
  )
}

export default BlogLoader
