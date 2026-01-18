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

type FilterProps = {
  title: string
}

export default function Filter({ title }: FilterProps): JSX.Element {
  return (
    <Drawer>
      <DrawerTrigger className='flex items-center gap-2.5 py-2 ps-2 pe-6 bg-blue-600 text-white rounded-4xl'>
        <ChevronDown />
        <p className='font-sm'>{title}</p>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerClose />
        </DrawerHeader>

        <div className='flex flex-col'>
          <Checkbox />
        </div>
      </DrawerContent>
    </Drawer>
  )
}
