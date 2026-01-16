import { githubApi } from '@/api/github'
import CardUser from '@/components/card-user/CardUser'
import TabsMenu from '@/components/tabs-menu/TabsMenu'
import type { UserProps } from '@/types/user'
import { useEffect, useState, type JSX } from 'react'

// gabrielcordeiro-dev

export default function ProfilePage(): JSX.Element {
  const [user, setUser] = useState<UserProps | null>()

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await githubApi
        .get<UserProps>('users/gabrielscordeiro')
        .then((res) => res.data)

      setUser(response)
    }
    fetchUserData()
  }, [])

  console.log(user)
  return (
    <div className='col-span-4'>
      <div className='flex flex-col md:flex-row justify-center'>
        <CardUser
          avatar_url={user?.avatar_url}
          name={user?.name}
          bio={user?.bio}
          company={user?.company}
          location={user?.location}
        />
        <TabsMenu />
      </div>
    </div>
  )
}
