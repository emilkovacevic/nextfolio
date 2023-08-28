'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Briefcase, Home, Newspaper, Send, User2 } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { ThemeToggle } from './ThemeToggle'

const LINKS = [
  { name: 'Home', path: '/', icon: <Home size={20} /> },
  { name: 'Info', path: '/info', icon: <User2 size={20} /> },
  { name: 'Projects', path: '/projects', icon: <Briefcase size={20} /> },
  { name: 'Blogs', path: '/blogs', icon: <Newspaper size={20} /> },
  { name: 'Contact', path: '/contact', icon: <Send size={20} /> }
]

const Navbar = () => {
  const currentPath = usePathname()
  return (
    <nav className="fixed bottom-0 md:bottom-auto md:top-[50vh] md:translate-y-[-50%] p-2 md:rounded bg-card text-card-foreground z-50 md:shadow-md">
      <TooltipProvider>
        <ul className="flex items-center w-screen gap-6 md:w-fit justify-evenly md:flex-col">
          {LINKS.map((link) => (
            <li
              key={link.name}
              className="relative p-2 group hover:cursor-pointer text-primary"
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    className={`${
                      currentPath === link.path
                        ? 'text-accent-foreground'
                        : 'text-inherit'
                    }`}
                    href={link.path}
                  >
                    {link.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="absolute right-[-50%] md:right-0 translate-x-[50%] md:translate-x-0 md:left-10 bottom-10 md:bottom-0 md:translate-y-[100%]  w-fit">
                  <p>{link.name}</p>
                </TooltipContent>
              </Tooltip>
            </li>
          ))}
          <li>
            <Tooltip>
              <TooltipTrigger asChild>
                <ThemeToggle />
              </TooltipTrigger>
              <TooltipContent className="absolute bottom-20 md:bottom-0 md:left-10">
                <p>Change Colors</p>
              </TooltipContent>
            </Tooltip>
          </li>
        </ul>
      </TooltipProvider>
    </nav>
  )
}

export default Navbar
