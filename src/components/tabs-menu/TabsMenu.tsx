import type { JSX } from 'react'
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs'
import { BookMarked, Search, Star } from 'lucide-react'
import { Badge } from '../ui/badge'
import { Input } from '../ui/input'

export default function TabsMenu(): JSX.Element {
  return (
    <Tabs defaultValue='repos'>
      <TabsList className='bg-background flex items-center gap-10'>
        {/* Repositories Tab */}
        <TabsTrigger
          value='repos'
          className='flex items-center rounded-none gap-2 h-10'
        >
          <div className='flex items-center p-2 gap-2'>
            <BookMarked className='size-4' />
            <p className='text-base font-normal'>Repositories</p>
          </div>
          <Badge
            className='text-xs border-muted-foreground'
            variant='secondary'
          >
            81
          </Badge>
        </TabsTrigger>

        {/* Starred Tab */}
        <TabsTrigger
          value='starred'
          className='flex items-center rounded-none gap-2 h-10'
        >
          <div className='flex items-center p-2 gap-2'>
            <Star />
            <p className='text-base font-normal'>Starred</p>
          </div>
          <Badge
            className='text-xs border-muted-foreground'
            variant='secondary'
          >
            12
          </Badge>
        </TabsTrigger>
      </TabsList>

      <div className='flex items-center'>
        <Search />
        <Input />
      </div>
    </Tabs>
  )
}
