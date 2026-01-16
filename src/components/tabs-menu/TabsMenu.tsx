import type { JSX } from 'react'
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs'
import { BookMarked, Star } from 'lucide-react'
import { Badge } from '../ui/badge'

export default function TabsMenu(): JSX.Element {
  return (
    <Tabs defaultValue='repos'>
      <TabsList className='w-full justify-between bg-background flex items-center gap-10'>
        <TabsTrigger
          value='repos'
          className='rounded-none gap-2 h-10 data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-b-orange-500'
        >
          <div className='flex p-2 gap-2'>
            <BookMarked />
            <p>Repositories</p>
          </div>
          <Badge className='py-1 border-muted-foreground' variant='secondary'>
            81
          </Badge>
        </TabsTrigger>

        <TabsTrigger
          value='starred'
          className='rounded-none gap-2 h-10 data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-b-orange-500'
        >
          <div className='flex p-2 gap-2'>
            <Star />
            <p>Starred</p>
          </div>
          <Badge className='py-1 border-muted-foreground' variant='secondary'>
            12
          </Badge>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
