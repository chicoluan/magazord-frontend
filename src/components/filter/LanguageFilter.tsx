import type { JSX } from 'react'
import { useFilterStore } from '@/store/useFilterStore'
import { LANGUAGES_OPTIONS } from '@/constants/filterOptions'
import FilterDrawer from './FilterDrawer'
import FilterDropdown from './FilterDropdown'

export default function LanguageFilter(): JSX.Element {
  const { languages, toggleLanguage } = useFilterStore()

  return (
    <div className='flex items-center'>
      <div className='flex md:hidden'>
        <FilterDrawer
          title='Language'
          onToogle={toggleLanguage}
          optionsSelected={languages}
          options={LANGUAGES_OPTIONS}
        />
      </div>
      <div className='hidden md:flex'>
        <FilterDropdown
          title='Language'
          onToogle={toggleLanguage}
          options={LANGUAGES_OPTIONS}
          optionsSelected={languages}
        />
      </div>
    </div>
  )
}
