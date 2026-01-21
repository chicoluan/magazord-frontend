import { type JSX, useState } from 'react'
import { useFilterStore } from '@/store/useFilterStore'
import LanguageFilter from '../filter/LanguageFilter'
import TypeFilter from '../filter/TypeFilter'
import SearchRepositoryInput from '../inputs/SearchRepoInput'
import NavLinks from '../nav/NavLinks'

export default function ProfileMenu(): JSX.Element {
  const [value, setValue] = useState('')
  const { setSearch } = useFilterStore()
  return (
    <div className='flex flex-col w-full items-center justify-center md:items-start gap-6'>
      <NavLinks />
      <div className='flex items-center w-full justify-between bg-secondary/30 px-2 py-3 gap-3 rounded-md md:flex-col lg:flex-row-reverse'>
        <div className='flex items-center gap-2'>
          <TypeFilter />
          <LanguageFilter />
        </div>
        <SearchRepositoryInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onSeach={setSearch}
        />
      </div>
    </div>
  )
}
