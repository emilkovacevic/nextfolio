import './globals.css'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ThemeProvider } from '@/lib/theme-provider'
import { AOSInit } from '@/lib/aos'
import ClientOnly from '@/components/ClientOnly'
import { ProgressBar } from '@/components/ProgressBar'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import { Analytics } from '@vercel/analytics/react'
import { Toaster } from '@/components/ui/toaster'

const monserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio Template',
  description: 'Personal portfolio Template',
  keywords:
    'next, react, developer, portfolio, design, hire, professional, template'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={monserrat.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AOSInit />
          <div className="relative flex flex-wrap min-h-screen ">
            <ClientOnly>
              <ProgressBar />
              <Navbar />
              <ScrollToTopButton />
              <Toaster />
            </ClientOnly>
            <div className="container grow p-2 my-12 md:pl-20 md:pr-20 grow">
              {children}
            </div>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
