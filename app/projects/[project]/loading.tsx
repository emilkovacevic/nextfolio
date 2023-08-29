import { Skeleton } from '@/components/ui/skeleton'

const PageLoader = () => {
  return (
    <main className="mx-auto">
      {/* Title */}
      <Skeleton className="h-8 w-[300px] mb-4" />

      {/* Description */}
      <Skeleton className="w-full h-6 mb-2" />
      <Skeleton className="h-6 w-[90%] mb-2" />
      <Skeleton className="h-6 w-[80%] mb-2" />
      <Skeleton className="h-6 w-[70%] mb-4" />

      {/* Image */}
      <Skeleton className="w-full h-[450px] my-10" />

      {/* Additional Text */}
      <Skeleton className="h-6 w-[60%]" />
      <Skeleton className="h-6 w-[50%]" />

      {/* Featured Content */}
      <div className="mt-8">
        {/* Featured Title */}
        <Skeleton className="h-6 w-[200px] my-10" />

        {/* Swipper */}
        <div className="flex gap-4">
          <div className="relative">
            <Skeleton className="w-full h-80" />
            <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-80">
              <Skeleton className="h-6 w-[150px] mt-4" />
              <Skeleton className="h-5 w-[100px] mt-2" />
            </div>
          </div>
          <div className="relative">
            <Skeleton className="w-full h-80" />
            <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-80">
              <Skeleton className="h-6 w-[150px] mt-4" />
              <Skeleton className="h-5 w-[100px] mt-2" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PageLoader
