import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import type { FilterOption } from '@/types/Filter'
import type { JSX } from 'react'

type FilterOptionsProps<T extends string> = {
  options: FilterOption<T>[]
  optionsSelected: T[]
  onToogle: (value: T) => void
}

export default function FilterOptions<T extends string>({
  options,
  optionsSelected,
  onToogle,
}: FilterOptionsProps<T>): JSX.Element {
  return (
    <div className='flex flex-col gap-2'>
      {options.map((option) => (
        <div className='flex items-center gap-4' key={option.label}>
          <Checkbox
            className='border-primary size-4'
            checked={optionsSelected.includes(option.value)}
            onCheckedChange={() => onToogle(option.value)}
          />
          <Label className='text-sm font-light'>{option.label}</Label>
        </div>
      ))}
    </div>
  )
}
