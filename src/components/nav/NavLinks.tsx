import { BookMarked, Star } from 'lucide-react'
import type { JSX } from 'react'
import { NavLink, useParams } from 'react-router'
import { Badge } from '../ui/badge'

type NavLinksProps = {
  totalRepositories: number
}

export default function NavLinks({
  totalRepositories,
}: NavLinksProps): JSX.Element {
  const { username } = useParams<{ username: string }>()

  const baseStyle = 'flex items-center justify-center gap-2 ps-2 py-2'
  const activeStyle = 'border-b-2 border-b-orange-600'

  return (
    <nav className='flex w-full items-center gap-11'>
      <NavLink
        to={`/${username}/repositories`}
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? activeStyle : 'text-muted-foreground'}`
        }
      >
        <BookMarked className='h-4 w-4' />
        <p className='text-base'>Repositories</p>
        <Badge className='px-3 py-1' variant='ghost'>
          {totalRepositories}
        </Badge>
      </NavLink>
      <NavLink
        to={`/${username}/starred`}
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? activeStyle : 'text-muted-foreground'}`
        }
      >
        <Star className='h-4 w-4' />
        <p className='text-base'>Starred</p>
        <Badge variant='ghost' className='px-3 py-1'>
          12
        </Badge>
      </NavLink>
    </nav>
  )
}
