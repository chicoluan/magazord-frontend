import NavMenu from '../nav-menu/NavMenu'
import { Search } from 'lucide-react'
import type { JSX } from 'react'
import FilterDrawer from '../filter/FilterDrawer'

export default function ProfileMenu(): JSX.Element {
  return (
    <div className='flex flex-col w-full items-center justify-center md:items-start gap-6'>
      <NavMenu />
      <div className='flex items-center w-full justify-between'>
        <div className='flex items-center gap-2'>
          <FilterDrawer
            options={[]}
            optionsSelected={[]}
            onToogle={() => {}}
            title='Type'
          />
          <FilterDrawer
            options={[]}
            optionsSelected={[]}
            onToogle={() => {}}
            title='Language'
          />
        </div>
        <Search />
      </div>
    </div>
  )
}
