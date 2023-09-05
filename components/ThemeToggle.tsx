'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip'
import { Tooltip } from './ui/tooltip'

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button aria-label="Toggle Theme" variant="link">
              <Sun className="hover:text-accent-foreground focus:text-accent-foreground h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
              <Moon className="hover:text-accent-foreground focus:text-accent-foreground absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0" />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="absolute bottom-20 md:bottom-0 md:left-10 shadow-md">
            <p>Toggle Theme</p>
          </TooltipContent>
        </Tooltip>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
