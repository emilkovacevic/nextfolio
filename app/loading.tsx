import { Skeleton } from '@/components/ui/skeleton'

const HomeLoader = () => {
  return (
    <main>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <Skeleton className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl h-12 w-[500px]" />
          <Skeleton className="mb-6 font-light lg:mb-8 md:text-lg lg:text-xl h-6 w-[450px]" />
          <div className="flex items-center mb-4 space-x-4">
            <Skeleton className="w-32 h-12" />
            <Skeleton className="w-32 h-12" />
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Skeleton className="w-96 h-96" />
        </div>
      </div>
    </main>
  )
}

export default HomeLoader
