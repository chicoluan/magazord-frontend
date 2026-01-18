import type { JSX } from 'react'
import ProfileCard from './ProfileCard'
import NavMenu from '../nav-menu/NavMenu'
import type { User } from '@/types/Users'
import Filter from '../filter/Filter'
import SearchInput from '../search-input/SearchInput'

type ProfileHeaderProps = {
  user: User
}

export default function ProfileHeader({
  user,
}: ProfileHeaderProps): JSX.Element {
  return (
    <div className='col-span-4 w-full flex flex-1'>
      <div className='flex flex-col w-full items-center md:flex-row md:items-start'>
        <ProfileCard
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
