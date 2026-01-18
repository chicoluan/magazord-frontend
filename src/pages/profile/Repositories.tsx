import type { JSX } from 'react'
import { useRepositories } from '@/hooks/useRepositories'
import { useOutletContext } from 'react-router'
import { Loader2 } from 'lucide-react'
import EmptyState from '@/components/empty-state'
import RepositoriesList from '@/components/repositories/RepositoriesList'

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

  return <RepositoriesList repositories={repositories} />
}
