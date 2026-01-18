import { BookMarked, Star } from 'lucide-react'
import type { JSX } from 'react'
import { NavLink } from 'react-router'
import { Badge } from '../ui/badge'

export default function NavMenu(): JSX.Element {
  return (
    <nav className='flex items-center gap-11'>
      <NavLink
        to='/profile/repositories'
        className={({ isActive }) =>
          `flex items-center justify-center gap-2 ps-2 py-2 ${isActive ? 'border-b-2 border-b-orange-600' : 'text-muted-foreground'}`
        }
      >
        <BookMarked className='w-4 h-4' />
        <p className='text-base'>Repositories</p>
        <Badge
          variant='secondary'
          className='py-1 px-3 border-muted-foreground text-muted-foreground'
        >
          81
        </Badge>
      </NavLink>
      <NavLink
        to='/profile/starred'
        className={({ isActive }) =>
          `flex items-center justify-center gap-2 ps-2 py-2 ${isActive ? 'border-b-2 border-b-orange-600' : 'text-muted-foreground'}`
        }
      >
        <Star className='w-4 h-4' />
        <p className='text-base'>Starred</p>
        <Badge
          variant='secondary'
          className='py-1 px-3 border-muted-foreground text-muted-foreground'
        >
          12
        </Badge>
      </NavLink>
    </nav>
  )
}
