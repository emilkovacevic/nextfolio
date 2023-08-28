/* eslint-disable react/no-array-index-key */
import { Skeleton } from '@/components/ui/skeleton'

const ProfileLoader = () => {
  return (
    <div className="min-h-screen p-6 bg-background text-foreground">
      {/* PageHeader Loader */}
      <div className="mb-8 text-center">
        <Skeleton className="w-1/2 h-12 mx-auto mt-6" />
        <Skeleton className="w-3/4 h-6 mx-auto mt-4" />
      </div>

      {/* Profile Card Loader */}
      <div className="flex flex-wrap rounded shadow-lg bg-card">
        <Skeleton className="md:w-1/3 h-80" />
        <div className="grid content-center p-4 md:w-2/3">
          <Skeleton className="w-1/2 h-12 mx-auto" />
          <Skeleton className="w-2/3 h-8 mx-auto mt-2" />
          <Skeleton className="w-3/4 h-16 mx-auto mt-2" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Contact Information Card Loader */}
        <div className="flex flex-col p-4 rounded shadow-lg bg-card">
          <Skeleton className="w-3/4 h-8 mx-auto mb-4" />
          {[...Array(5)].map((_, idx) => (
            <Skeleton key={idx} className="w-full h-6 mb-2" />
          ))}
        </div>

        {/* Education Card Loader */}
        <div className="flex flex-col p-4 rounded shadow-lg bg-card">
          <Skeleton className="w-3/4 h-8 mx-auto mb-4" />
          {[...Array(3)].map((_, idx) => (
            <Skeleton key={idx} className="w-full h-6 mb-2" />
          ))}
        </div>

        {/* Skills Card Loader */}
        <div className="flex flex-col p-4 rounded shadow-lg bg-card">
          <Skeleton className="w-3/4 h-8 mx-auto mb-4" />
          {[...Array(5)].map((_, idx) => (
            <Skeleton key={idx} className="w-2/3 h-6 mx-auto mb-2" />
          ))}
        </div>
      </div>

      {/* Work Experience Card Loader */}
      <section className="flex flex-col w-full p-4 mt-10 rounded shadow-lg bg-card">
        <Skeleton className="w-3/4 h-12 mx-auto mt-2" />
        {[...Array(2)].map((_, idx) => (
          <div key={idx} className="mb-4">
            <Skeleton className="w-1/2 h-8 mx-auto" />
            <Skeleton className="w-2/3 h-6 mx-auto mt-2" />
            <ul className="pl-5 list-disc">
              {[...Array(3)].map((_, subIdx) => (
                <Skeleton key={subIdx} className="w-3/4 h-6 mx-auto mb-2" />
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Swipper Loader */}
      <section className="mt-10 shadow-lg bg-card">
        <Skeleton className="w-3/4 h-12 mx-auto mt-6" />
        <div className="p-4">
          <Skeleton className="w-full h-64" />
        </div>
      </section>
    </div>
  )
}

export default ProfileLoader
