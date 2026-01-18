import type { JSX } from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer'
import { ChevronDown } from 'lucide-react'
import { Checkbox } from '../ui/checkbox'
import type { FilterOption } from '@/types/Filter'
import { Label } from '../ui/label'

type FilterProps = {
  title: string
  options: FilterOption[]
  optionsSelected: string[]
  onToogle: (value: string) => void
}

export default function FilterDrawer({
  title,
  options,
  optionsSelected,
  onToogle,
}: FilterProps): JSX.Element {
  return (
    <Drawer>
      <DrawerTrigger className='flex items-center gap-2.5 p-2 pe-6 bg-blue-600 text-white rounded-4xl'>
        <ChevronDown />
        <p className='font-sm'>{title}</p>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerClose />
        </DrawerHeader>

        <div className='flex flex-col'>
          {options.map((option) => (
            <div className='' key={option.label}>
              <Checkbox
                checked={optionsSelected.includes(option.value)}
                onCheckedChange={() => onToogle(option.value)}
              />
              <Label>{option.label}</Label>
            </div>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  )
}
