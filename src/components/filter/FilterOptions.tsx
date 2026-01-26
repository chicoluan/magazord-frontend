import type { JSX } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

type FilterOptionsProps<T extends string> = {
  options: readonly T[]
  optionsSelected: T[]
  onToogle: (value: T) => void
}

export default function FilterOptions<T extends string>({
  options,
  optionsSelected,
  onToogle,
}: FilterOptionsProps<T>): JSX.Element {
  const allChecked =
    options.length > 0 && optionsSelected.length === options.length

  const optionsToToggle = allChecked
    ? options
    : options.filter((option) => !optionsSelected.includes(option))

  const toogleCheckedAll = () => {
    optionsToToggle.forEach(onToogle)
  }

  return (
    <div className='flex flex-col gap-2'>
      {/* All checkbox separated because it just manage local state */}
      <div className='flex items-center gap-4'>
        <Checkbox
          className='size-4 border-primary'
          checked={allChecked}
          onCheckedChange={toogleCheckedAll}
        />
        <Label className='font-light text-sm capitalize'>all</Label>
      </div>

      {/* Other options */}
      {options.map((option) => (
        <div className='flex items-center gap-4' key={option}>
          <Checkbox
            className='size-4 border-primary'
            checked={optionsSelected.includes(option)}
            onCheckedChange={() => onToogle(option)}
          />
          <Label className='font-light text-sm capitalize'>{option}</Label>
        </div>
      ))}
    </div>
  )
}
