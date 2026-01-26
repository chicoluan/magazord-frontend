import type { JSX } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'

type ProfileImageProps = {
  imageUrl: string
}

export default function ProfileImage({
  imageUrl,
}: ProfileImageProps): JSX.Element {
  return (
    <div className='relative'>
      <Avatar className='h-28 w-28'>
        <AvatarImage src={imageUrl} />
        <AvatarFallback>
          <Skeleton className='h-28 w-28 rounded-full' />
        </AvatarFallback>
      </Avatar>
      <Badge variant='secondary' className='absolute right-0 bottom-0 p-2'>
        😎
      </Badge>
    </div>
  )
}
