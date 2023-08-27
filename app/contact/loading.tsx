import { Skeleton } from '@/components/ui/skeleton'

const ContactLoader = () => {
  return (
    <main className="min-h-screen p-6 bg-background text-foreground">
      <div className="container px-4 mx-auto md:px-0">
        {/*  Header: Contact Me  */}
        <div className="mb-8 text-center">
          <Skeleton className="w-1/2 h-12 mx-auto" />
          <Skeleton className="w-3/4 h-6 mx-auto mt-4" />
        </div>

        {/*  Social Media Links  */}
        <div className="flex flex-wrap mb-8 justify-evenly">
          <div className="flex gap-2 m-2 text-2xl">
            <Skeleton className="w-8 h-8" />
            <Skeleton className="w-24 h-6" />
          </div>
          <div className="flex gap-2 m-2 text-2xl">
            <Skeleton className="w-8 h-8" />
            <Skeleton className="w-24 h-6" />
          </div>
          <div className="flex gap-2 m-2 text-2xl">
            <Skeleton className="w-8 h-8" />
            <Skeleton className="w-24 h-6" />
          </div>
        </div>

        {/*  Contact Form  */}
        <div className="p-8 mb-6 rounded-md shadow-lg bg-card">
          <Skeleton className="w-1/4 h-6 mb-4" />
          <Skeleton className="w-full h-10 mb-4" />
          <Skeleton className="w-1/4 h-6 mb-4" />
          <Skeleton className="w-full h-10 mb-4" />
          <Skeleton className="w-1/4 h-6 mb-4" />
          <Skeleton className="mb-4 h-[100px] w-full" />
          <Skeleton className="w-1/3 h-12 mt-4" />
        </div>

        {/*  Google Maps Embed  */}
        <div className="mb-8">
          <Skeleton className="w-full h-[450px]" />
        </div>
      </div>
    </main>
  )
}

export default ContactLoader
