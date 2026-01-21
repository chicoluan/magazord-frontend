import type { JSX } from 'react'
import type { SocialAccount } from '@/types/SocialAccount'
import type { User } from '@/types/User'
import ProfileCard from './ProfileCard'

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
