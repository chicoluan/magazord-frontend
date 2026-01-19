import type { JSX } from 'react'
import { useRepositories } from '@/hooks/useRepositories'
import { useOutletContext } from 'react-router'
import { Loader2 } from 'lucide-react'
import EmptyState from '@/components/empty-state'
import RepositoriesList from '@/components/repositories/RepositoriesList'

export default function RepositoriesPage(): JSX.Element {
  const { username } = useOutletContext<{ username: string }>()
  const { data: repositories, isLoading, isError } = useRepositories(username)

  console.log(repositories)

  // IMPROVE THIS LOADER
  if (isLoading) {
    return <Loader2 />
  }

  if (isError || !repositories?.length) {
    return <EmptyState />
  }

  return <RepositoriesList repositories={repositories} />
}
