import { Skeleton } from '@/components/ui/skeleton'

const ProjectPageLoader = () => {
  return (
    <div className="min-h-screen py-6">
      {/* PageHeader Loader */}
      <div className="mb-8 text-center">
        <Skeleton className="w-1/2 h-12 mx-auto mt-6" />
        <Skeleton className="w-3/4 h-6 mx-auto mt-4" />
      </div>
      <main>
        <div className="container mx-auto md:px-0">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Project Loader */}
            <div className="p-8 text-center transition-shadow duration-300 rounded-md shadow-lg bg-card">
              <Skeleton className="w-1/2 h-12 mx-auto mt-2" />
              <Skeleton className="w-full mx-auto mt-4 h-72" />
            </div>
            <div className="p-8 text-center transition-shadow duration-300 rounded-md shadow-lg bg-card">
              <Skeleton className="w-1/2 h-12 mx-auto mt-2" />
              <Skeleton className="w-full mx-auto mt-4 h-72" />
            </div>
            <div className="p-8 text-center transition-shadow duration-300 rounded-md shadow-lg bg-card">
              <Skeleton className="w-1/2 h-12 mx-auto mt-2" />
              <Skeleton className="w-full mx-auto mt-4 h-72" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProjectPageLoader
