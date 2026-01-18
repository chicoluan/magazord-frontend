import type { JSX } from 'react'
import ProfileCard from './profile-card/ProfileCard'
import type { User } from '@/types/User'

type ProfileInfoProps = {
  user: User
}

export default function ProfileInfo({ user }: ProfileInfoProps): JSX.Element {
  return (
    <div className='col-span-4 md:col-span-2 lg:w-1/4 place-items-center-center'>
      <div className='flex justify-center'>
        <ProfileCard
          avatar_url={user?.avatar_url}
          name={user?.name}
          bio={user?.bio}
          company={user?.company}
          location={user?.location}
        />
      </div>
    </div>
  )
}
