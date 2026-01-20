import type { JSX } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import ProfileAdditionalData from './ProfileAdditionalData'
import type { User } from '@/types/User'
import ProfileImage from './ProfileImage'
import type { SocialAccount } from '@/types/SocialAccount'

type ProfileCardProps = {
  user: User
  socialAccounts?: SocialAccount[]
}

export default function ProfileCard({
  user,
  socialAccounts,
}: ProfileCardProps): JSX.Element {
  return (
    <Card className='w-3xs gap-4 border-none py-0 shadow-none'>
      <CardHeader className='flex flex-col items-center justify-center'>
        <ProfileImage imageUrl={user?.avatar_url} />
      </CardHeader>

      <CardContent className='flex flex-col gap-1 text-center'>
        <p className='font-bold text-xl'>{user?.name}</p>
        <p className='text-muted-foreground text-sm'>{user?.bio}</p>
      </CardContent>

      <CardFooter className='flex justify-center'>
        <ProfileAdditionalData
          company={user?.company}
          location={user?.location}
          blog={user?.blog}
          socialAccounts={socialAccounts}
        />
      </CardFooter>
    </Card>
  )
}
