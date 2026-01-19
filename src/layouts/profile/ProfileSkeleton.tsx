import { Skeleton } from '@/components/ui/skeleton'
import type { JSX } from 'react'

export default function ProfileSkeleton(): JSX.Element {
  return (
    <div className='grid grid-cols-4 md:grid-cols-6 lg:flex lg:w-full gap-6 px-6 pt-10'>
      <div className='col-span-4 md:col-span-2 lg:w-1/4 '>
        <Skeleton className='w-3xs' />
      </div>
      <div className='col-span-4 md:col-span-2 lg:w-3/4'>
        <Skeleton />
      </div>
    </div>
  )
}
