import CardUser from '@/components/card-user/CardUser'
import NavMenu from '@/components/nav-menu/NavMenu'
import { useUser } from '@/hooks/useUser'
import { useUserStore } from '@/store/useUserStore'
import type { JSX } from 'react'
import Filter from '@/components/filter/Filter'
import { useRepositories } from '@/hooks/useRepositories'
import SearchInput from '@/components/search-input/SearchInput'

export default function ProfilePage(): JSX.Element {
  const username = useUserStore((state) => state.username)
  const { data: user } = useUser(username)
  const { data: repositories } = useRepositories(username)

  console.log(repositories)

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
        <div className='flex flex-col w-full items-center justify-center md:items-start gap-6'>
          <NavMenu />
          <div className='flex items-center w-full'>
            <Filter title='Type' />
            <Filter title='Language' />
            <SearchInput placeholder='Search repository' onSeach={() => {}} />
          </div>
        </div>
      </div>
    </div>
  )
}
