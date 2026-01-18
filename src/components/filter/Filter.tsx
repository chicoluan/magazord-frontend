import type { JSX } from 'react'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer'

export default function Filter(): JSX.Element {
  return (
    <Drawer>
      <DrawerTrigger>Type</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Type</DrawerTitle>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  )
}

// Language
