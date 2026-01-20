import type { JSX } from 'react'
import ProfileCard from './ProfileCard'
import type { User } from '@/types/User'
import type { SocialAccount } from '@/types/SocialAccount'

type ProfileInfoProps = {
  user: User
  socialAccounts?: SocialAccount[]
}

export default function ProfileInfo({
  user,
  socialAccounts,
}: ProfileInfoProps): JSX.Element {
  return (
    <div className='flex justify-center items-start'>
      <ProfileCard user={user} socialAccounts={socialAccounts} />
    </div>
  )
}
