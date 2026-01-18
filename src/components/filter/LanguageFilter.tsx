import type { JSX } from 'react'
import FilterDrawer from './filter-drawer/FilterDrawer'
import { useFilterStore } from '@/store/useFilterStore'
import { LANGUAGES_OPTIONS } from '@/constants/filterOptions'

export default function LanguageFilter(): JSX.Element {
  const { languages, toggleLanguage } = useFilterStore()

  return (
    <FilterDrawer
      title='Language'
      onToogle={toggleLanguage}
      optionsSelected={languages}
      options={LANGUAGES_OPTIONS}
    />
  )
}
