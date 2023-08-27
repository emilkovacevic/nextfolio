import './globals.css'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

const monserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio Website',
  description: 'Created by Emil'
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
          <div className="flex flex-wrap min-h-screen bg-background text-foreground">
            <Navbar />
            <div className="container self-center md:pl-20 md:pr-20 grow">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
