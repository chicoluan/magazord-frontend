import { ChevronDown, X } from 'lucide-react'
import type { JSX } from 'react'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer'
import FilterOptions from './FilterOptions'

type FilterProps<T extends string> = {
  title: string
  options: readonly T[]
  optionsSelected: T[]
  onToogle: (value: T) => void
}

export default function FilterDrawer<T extends string>({
  title,
  options,
  optionsSelected,
  onToogle,
}: FilterProps<T>): JSX.Element {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className='flex items-center gap-2.5 rounded-4xl bg-blue-600 p-2 pe-6 text-white'>
          <ChevronDown />
          <p className='text-sm'>{title}</p>
        </Button>
      </DrawerTrigger>

      <DrawerContent className='min-h-svh gap-6 p-6 pt-0'>
        {/* title and close button */}
        <DrawerHeader className='flex flex-row items-center justify-between px-0'>
          <DrawerTitle className='font-semibold text-xl'>{title}</DrawerTitle>
          <DrawerClose>
            <X className='h-6 w-6 text-destructive' />
          </DrawerClose>
        </DrawerHeader>

        {/* options */}
        <FilterOptions
          onToogle={onToogle}
          options={options}
          optionsSelected={optionsSelected}
        />
      </DrawerContent>
    </Drawer>
  )
}
