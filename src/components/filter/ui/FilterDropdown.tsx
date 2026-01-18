import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'
import type { JSX } from 'react'
import FilterOptions from './FilterOptions'
import type { FilterOption } from '@/types/Filter'

type FilterDropdownProps<T extends string> = {
  title: string
  options: FilterOption<T>[]
  optionsSelected: T[]
  onToogle: (value: T) => void
}

export default function FilterDropdown<T extends string>({
  title,
  options,
  optionsSelected,
  onToogle,
}: FilterDropdownProps<T>): JSX.Element {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='flex items-center gap-2.5 p-2 pe-6 bg-blue-600 text-white rounded-4xl'>
          <ChevronDown />
          <p className='text-sm'>{title}</p>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='start' className='w-64 p-2'>
        <FilterOptions
          options={options}
          onToogle={onToogle}
          optionsSelected={optionsSelected}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
