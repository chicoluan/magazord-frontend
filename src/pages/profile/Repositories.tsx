import type { JSX } from 'react'
import { useRepositories } from '@/hooks/useRepositories'
import { useOutletContext } from 'react-router'
import { Loader2 } from 'lucide-react'
import EmptyState from '@/components/empty-state'

type ProfilePageContext = {
  username: string
}

export default function ProfilePage(): JSX.Element {
  const { username } = useOutletContext<ProfilePageContext>()
  const { data: repositories, isLoading, isError } = useRepositories(username)

  console.log(repositories)

  if (isLoading) {
    return <Loader2 />
  }

  if (isError || !repositories?.length) {
    return <EmptyState />
  }
  // create a list of repos -- DO NOT FORGET

  return (
    <div className='flex items-center flex-col'>
      {repositories?.map((repository) => (
        <div key={repository.id}>
          <p>{repository.full_name}</p>
          <p>{repository.description}</p>
        </div>
      ))}
    </div>
  )
}
