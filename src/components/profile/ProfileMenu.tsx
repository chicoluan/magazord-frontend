import NavLinks from '../nav-links/NavLinks'
import type { JSX } from 'react'
import TypeFilter from '../filter/TypeFilter'
import LanguageFilter from '../filter/LanguageFilter'
import SearchInput from '../search-input/SearchInput'

export default function ProfileMenu(): JSX.Element {
  return (
    <div className='flex flex-col w-full items-center justify-center md:items-start gap-6'>
      <NavLinks />
      <div className='flex items-center w-full justify-between bg-secondary px-2 py-3 rounded-md md:flex-col lg:flex-row-reverse'>
        <div className='flex items-center gap-2'>
          <TypeFilter />
          <LanguageFilter />
        </div>
        <SearchInput onSeach={() => {}} />
      </div>
    </div>
  )
}
