import { Skeleton } from '@/components/ui/skeleton'

const ContactLoader = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container px-4 mx-auto md:px-0">
        {/*  Header: Contact Me  */}
        <div className="mb-8 text-center">
          <Skeleton className="w-1/2 h-12 mx-auto mt-6" />
          <Skeleton className="w-3/4 h-6 mx-auto mt-4" />
        </div>

        {/*  Social Media Links  */}
        <div className="flex flex-wrap mb-8 justify-evenly">
          <div className="m-2 md:text-2xl">
            <Skeleton className="w-10 h-10 mx-auto" /> {/* Icon */}
            <Skeleton className="w-1/4 h-4 mx-auto mt-2" /> {/* Text */}
          </div>
          <div className="m-2 md:text-2xl">
            <Skeleton className="w-10 h-10 mx-auto" /> {/* Icon */}
            <Skeleton className="w-1/4 h-4 mx-auto mt-2" /> {/* Text */}
          </div>
          <div className="m-2 md:text-2xl">
            <Skeleton className="w-10 h-10 mx-auto" /> {/* Icon */}
            <Skeleton className="w-1/4 h-4 mx-auto mt-2" /> {/* Text */}
          </div>
        </div>

        {/*  Contact Form  */}
        <div className="p-8 mb-6 rounded-md shadow-lg bg-card">
          <Skeleton className="w-3/4 h-8 mb-4" /> {/* Name Input */}
          <Skeleton className="w-3/4 h-8 mb-4" /> {/* Email Input */}
          <Skeleton className="w-full h-24 mb-4" /> {/* Message Textarea */}
          <Skeleton className="w-1/4 h-8 mx-auto" /> {/* Submit Button */}
        </div>

        {/*  Google Maps Embed  */}
        <div className="mb-8">
          <Skeleton className="w-full h-96" /> {/* Maps Loader */}
        </div>
      </div>
    </main>
  )
}

export default ContactLoader
