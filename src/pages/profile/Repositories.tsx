import type { JSX } from 'react'
import Filter from '@/components/filter/Filter'
import { useRepositories } from '@/hooks/useRepositories'
import SearchInput from '@/components/search-input/SearchInput'
import { useOutletContext } from 'react-router'

type ProfilePageContext = {
  username: string
}

export default function ProfilePage(): JSX.Element {
  const { username } = useOutletContext<ProfilePageContext>()
  const { data: repositories } = useRepositories(username)

  // create a list of repos -- DO NOT FORGET

  return (
    <div className='flex items-center w-full'>
      <Filter title='Type' />
      <Filter title='Language' />
      <SearchInput placeholder='Search repository' onSeach={() => {}} />
    </div>
  )
}
