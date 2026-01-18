import type { JSX } from 'react'
import NavMenu from '../nav-menu/NavMenu'
import Filter from '../filter/Filter'
import SearchInput from '../search-input/SearchInput'

export default function ProfileMenu(): JSX.Element {
  return (
    <div className='flex flex-col w-full items-center justify-center md:items-start gap-6'>
      <NavMenu />
      <div className='flex items-center w-full'>
        <Filter title='Type' />
        <Filter title='Language' />
        <SearchInput placeholder='Search repository' onSeach={() => {}} />
      </div>
    </div>
  )
}
