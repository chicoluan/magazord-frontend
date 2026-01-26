import { ChevronDown } from 'lucide-react'
import type { JSX } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import FilterOptions from './FilterOptions'

type FilterDropdownProps<T extends string> = {
  title: string
  options: readonly T[]
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
        <Button className='flex items-center gap-2.5 rounded-4xl bg-blue-600 p-2 pe-6 text-white'>
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
