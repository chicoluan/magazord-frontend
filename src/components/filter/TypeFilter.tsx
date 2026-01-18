import type { JSX } from 'react'
import FilterDrawer from './filter-drawer/FilterDrawer'
import { TYPE_OPTIONS } from '@/constants/filterOptions'
import { useFilterStore } from '@/store/useFilterStore'

export default function TypeFilter(): JSX.Element {
  const { types, toggleType } = useFilterStore()

  return (
    <FilterDrawer
      title='Type'
      options={TYPE_OPTIONS}
      onToogle={toggleType}
      optionsSelected={types}
    />
  )
}
