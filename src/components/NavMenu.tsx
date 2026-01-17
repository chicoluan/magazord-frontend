import { BookMarked, Star } from 'lucide-react'
import type { JSX } from 'react'
import { NavLink } from 'react-router'
import { Badge } from './ui/badge'

export default function NavMenu(): JSX.Element {
  return (
    <nav className='flex items-center gap-11'>
      <NavLink
        to='/profile/repositories'
        className='flex items-center justify-center gap-2 active:border-b-orange-600'
      >
        <BookMarked className='w-4 h-4' />
        Repositories
        <Badge variant='secondary'>81</Badge>
      </NavLink>
      <NavLink
        to='/profile/starred'
        className='flex items-center justify-center gap-2  active:border-b-orange-600'
      >
        <Star className='w-4 h-4' />
        Starred
        <Badge variant='secondary'>12</Badge>
      </NavLink>
    </nav>
  )
}
