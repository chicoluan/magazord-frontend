import type { JSX } from 'react'
import ProfileCard from './profile-card/ProfileCard'
import type { User } from '@/types/User'

type ProfileInfoProps = {
  user: User
}

export default function ProfileInfo({ user }: ProfileInfoProps): JSX.Element {
  return (
    <div className='flex justify-center items-start'>
      <ProfileCard
        avatar_url={user?.avatar_url}
        name={user?.name}
        bio={user?.bio}
        company={user?.company}
        location={user?.location}
      />
    </div>
  )
}
