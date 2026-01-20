import type { JSX } from 'react'
import { TYPE_OPTIONS } from '@/constants/filterOptions'
import { useFilterStore } from '@/store/useFilterStore'
import FilterDrawer from './FilterDrawer'
import FilterDropdown from './FilterDropdown'

export default function TypeFilter(): JSX.Element {
  const { types, toggleType } = useFilterStore()

  return (
    <div className='flex items-center'>
      <div className='flex md:hidden'>
        <FilterDrawer
          title='Type'
          options={TYPE_OPTIONS}
          onToogle={toggleType}
          optionsSelected={types}
        />
      </div>
      <div className='hidden md:flex'>
        <FilterDropdown
          title='Type'
          onToogle={toggleType}
          options={TYPE_OPTIONS}
          optionsSelected={types}
        />
      </div>
    </div>
  )
}
