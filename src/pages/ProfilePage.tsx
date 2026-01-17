import CardUser from '@/components/card-user/CardUser'
import { useUsername } from '@/hooks/useUser'
import { useUserStore } from '@/store/useUserStore'
import type { JSX } from 'react'

export default function ProfilePage(): JSX.Element {
  const username = useUserStore((state) => state.username)
  const { data: user } = useUsername(username)

  console.log('username: ', username)
  console.log('user: ', user)
  return (
    <div className='col-span-4 w-full flex flex-1'>
      <div className='flex flex-col w-full items-center md:flex-row md:items-start'>
        <CardUser
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
