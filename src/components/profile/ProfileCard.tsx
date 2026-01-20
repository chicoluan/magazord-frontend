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
    <Card className='border-none shadow-none w-3xs gap-4 py-0'>
      <CardHeader className='flex flex-col justify-center items-center'>
        <ProfileImage imageUrl={user?.avatar_url} />
      </CardHeader>

      <CardContent className='flex flex-col text-center gap-1'>
        <p className='text-xl font-bold'>{user?.name}</p>
        <p className='text-sm text-muted-foreground'>{user?.bio}</p>
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
