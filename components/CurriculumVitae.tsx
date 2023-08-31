'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { DownloadCloud } from 'lucide-react'

const CurriculumVitae = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          title="View Curriculum Vitae"
          variant="link"
          className="w-full font-extrabold h-fit bg-primary dark:text-foreground text-card"
        >
          Curriculum Vitae <DownloadCloud className="mx-2" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <section>
          <iframe
            className="max-w-6xl w-full m-4 mx-auto min-h-[calc(100vh-100px)]"
            title="Curriculum Vitae"
            src="/CurriculumVitae.pdf"
            width={1200}
            height={500}
          />
        </section>
      </DialogContent>
    </Dialog>
  )
}

export default CurriculumVitae
