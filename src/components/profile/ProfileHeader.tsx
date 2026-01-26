import { type JSX, useState } from 'react'
import { useFilterStore } from '@/store/useFilterStore'
import LanguageFilter from '../filter/LanguageFilter'
import TypeFilter from '../filter/TypeFilter'
import SearchRepositoryInput from '../inputs/SearchRepoInput'
import NavLinks from '../nav/NavLinks'

type ProfileHeaderProps = {
  totalPublicRepositories: number
  totalPrivateRepositories: number
}

export default function ProfileHeader({
  totalPrivateRepositories,
  totalPublicRepositories,
}: ProfileHeaderProps): JSX.Element {
  const [value, setValue] = useState('')
  const { setSearch } = useFilterStore()

  const totalRepositories = totalPrivateRepositories + totalPublicRepositories
  return (
    <div className='flex w-full flex-col items-center justify-center gap-6 md:items-start'>
      <NavLinks totalRepositories={totalRepositories} />
      <div className='flex w-full items-center justify-between gap-3 rounded-md bg-secondary/30 px-2 py-3 md:flex-col lg:flex-row-reverse'>
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
