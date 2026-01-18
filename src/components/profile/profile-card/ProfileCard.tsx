import type { JSX } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar'
import { Badge } from '../../ui/badge'
import { Card, CardContent, CardFooter, CardHeader } from '../../ui/card'
import ProfileAdditionalData from './ProfileAdditionalData'
import { Skeleton } from '../../ui/skeleton'

type ProfileCardProps = {
  avatar_url?: string
  name?: string | null
  bio?: string | null
  company?: string | null
  location?: string | null
  blog?: string | null
}

export default function ProfileCard({
  avatar_url,
  name,
  bio,
  company,
  location,
  blog,
}: ProfileCardProps): JSX.Element {
  return (
    <Card className='border-none shadow-none w-3xs gap-4 py-0'>
      <CardHeader className='flex flex-col justify-center items-center'>
        <div className='relative'>
          <Avatar className='h-28 w-28'>
            <AvatarImage src={avatar_url} />
            <AvatarFallback>
              <Skeleton className='h-28 w-28 rounded-full' />
            </AvatarFallback>
          </Avatar>
          <Badge variant='secondary' className='absolute right-0 bottom-0 p-2'>
            😎
          </Badge>
        </div>
      </CardHeader>

      <CardContent className='flex flex-col text-center gap-1'>
        <p className='text-xl font-bold'>{name}</p>
        <p className='text-sm text-muted-foreground'>{bio}</p>
      </CardContent>

      <CardFooter className='flex justify-center'>
        <ProfileAdditionalData
          company={company}
          location={location}
          blog={blog}
        />
      </CardFooter>
    </Card>
  )
}
