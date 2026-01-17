import CardUser from '@/components/card-user/CardUser'
import TabsMenu from '@/components/tabs-menu/TabsMenu'
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
      <div className='flex flex-col w-full md:flex-row items-center md:items-start justify-center'>
        <CardUser
          avatar_url={user?.avatar_url}
          name={user?.name}
          bio={user?.bio}
          company={user?.company}
          location={user?.location}
        />
        <div className='flex flex-1 flex-col pt-8'>
          <TabsMenu />
        </div>
      </div>
    </div>
  )
}
