import { Skeleton } from '@/components/ui/skeleton'

const PageLoader = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full p-4 bg-gray-100 lg:w-1/4">
        <div className="sticky space-y-2 top-4">
          <Skeleton className="h-6 w-[150px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[180px]" />
          <Skeleton className="h-4 w-[170px]" />
        </div>
      </aside>

      {/* Main content */}
      <main className="w-full p-4 lg:w-3/4">
        <Skeleton className="h-8 w-[300px]" />

        <div className="flex items-center mb-8 space-x-2">
          <Skeleton className="w-10 h-10 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-3 w-[100px]" />
          </div>
        </div>

        <div className="space-y-4">
          <Skeleton className="h-6 w-[250px]" />
          <Skeleton className="w-full h-5" />
          <Skeleton className="w-full rounded-md h-450px" />
        </div>

        <div className="mt-4 space-x-2">
          <Skeleton className="px-2 py-1 rounded-md" />
          <Skeleton className="px-2 py-1 rounded-md" />
        </div>

        <div className="mt-8 space-y-2">
          <Skeleton className="h-6 w-[200px]" />
          <ul>
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[230px]" />
          </ul>
        </div>
      </main>
    </div>
  )
}

export default PageLoader
