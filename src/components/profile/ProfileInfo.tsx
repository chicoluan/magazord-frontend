import type { JSX } from 'react'
import ProfileCard from './ProfileCard'
import type { User } from '@/types/User'

type ProfileInfoProps = {
  user: User
}

export default function ProfileInfo({ user }: ProfileInfoProps): JSX.Element {
  return (
    <div className='flex justify-center items-start'>
      <ProfileCard user={user} />
    </div>
  )
}
