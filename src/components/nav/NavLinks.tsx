import { BookMarked, Star } from 'lucide-react'
import type { JSX } from 'react'
import { NavLink, useParams } from 'react-router'
import { Badge } from '../ui/badge'

export default function NavLinks(): JSX.Element {
  const { username } = useParams<{ username: string }>()

  const baseStyle = 'flex items-center justify-center gap-2 ps-2 py-2'
  const activeStyle = 'border-b-2 border-b-orange-600'

  return (
    <nav className='flex items-center gap-11 w-full'>
      <NavLink
        to={`/${username}/repositories`}
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? activeStyle : 'text-muted-foreground'}`
        }
      >
        <BookMarked className='w-4 h-4' />
        <p className='text-base'>Repositories</p>
        <Badge className='py-1 px-3' variant='ghost'>
          81
        </Badge>
      </NavLink>
      <NavLink
        to={`/${username}/starred`}
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? activeStyle : 'text-muted-foreground'}`
        }
      >
        <Star className='w-4 h-4' />
        <p className='text-base'>Starred</p>
        <Badge variant='ghost' className='py-1 px-3'>
          12
        </Badge>
      </NavLink>
    </nav>
  )
}
