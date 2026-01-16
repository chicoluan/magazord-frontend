import type { JSX } from 'react'
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs'
import { BookMarked, Star } from 'lucide-react'
import { Badge } from '../ui/badge'

export default function TabsMenu(): JSX.Element {
  return (
    <Tabs defaultValue='repos'>
      <TabsList className='w-full justify-between bg-background flex items-center gap-10'>
        {/* Repositories Tab */}
        <TabsTrigger value='repos' className='rounded-none gap-2 h-10'>
          <div className='flex items-center p-2 gap-2'>
            <BookMarked />
            <p className='text-base lg:text-lg font-normal'>Repositories</p>
          </div>
          <Badge
            className='py-1 text-sm border-muted-foreground'
            variant='secondary'
          >
            81
          </Badge>
        </TabsTrigger>

        {/* Starred Tab */}
        <TabsTrigger value='starred' className='rounded-none gap-2 h-10'>
          <div className='flex items-center p-2 gap-2'>
            <Star />
            <p className='text-base lg:text-lg font-normal'>Starred</p>
          </div>
          <Badge
            className='py-1 text-sm border-muted-foreground'
            variant='secondary'
          >
            12
          </Badge>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
