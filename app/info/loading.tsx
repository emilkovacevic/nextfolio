import { Skeleton } from '@/components/ui/skeleton'

const InfoLoader = () => {
  return (
    <main className="min-h-screen p-6 bg-background text-foreground">
      <div className="container px-4 mx-auto md:px-0">
        {/*  Header: Name & Title  */}
        <div className="mb-8 text-center">
          <Skeleton className="w-1/4 h-12 mx-auto" />
          <Skeleton className="w-1/2 h-6 mx-auto mt-4" />
        </div>

        {/*  Basic Info  */}
        <div className="mb-8">
          <Skeleton className="w-1/4 h-8 mb-4" />
          <Skeleton className="w-1/2 h-6" />
          <Skeleton className="w-1/2 h-6" />
          <Skeleton className="w-1/2 h-6" />
          <Skeleton className="w-1/2 h-6" />
          <Skeleton className="w-1/2 h-6" />
        </div>

        {/*  Education  */}
        <div className="mb-8">
          <Skeleton className="w-1/4 h-8 mb-4" />
          <Skeleton className="w-2/3 h-6 mb-4" />
          <Skeleton className="w-2/3 h-6" />
        </div>

        {/*  Skills  */}
        <div className="mb-8">
          <Skeleton className="w-1/4 h-8 mb-4" />
          <Skeleton className="w-2/3 h-6" />
          <Skeleton className="w-2/3 h-6" />
          <Skeleton className="w-2/3 h-6" />
          <Skeleton className="w-2/3 h-6" />
          <Skeleton className="w-2/3 h-6" />
        </div>

        {/*  Work Experience  */}
        <div className="mb-8">
          <Skeleton className="w-1/4 h-8 mb-4" />
          <Skeleton className="w-2/3 h-6 mb-4" />
          <Skeleton className="w-2/3 h-6" />
          <Skeleton className="w-2/3 h-6" />
          <Skeleton className="w-2/3 h-6" />
        </div>
      </div>
    </main>
  )
}

export default InfoLoader
