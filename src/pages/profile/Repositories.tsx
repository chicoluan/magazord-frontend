import type { JSX } from 'react'
import { useOutletContext } from 'react-router'
import { Loader2 } from 'lucide-react'
import EmptyState from '@/components/empty-state'
import RepositoriesList from '@/components/repositories/RepositoriesList'
import { useFilterStore } from '@/store/useFilterStore'
import { useFilteredRepositories } from '@/hooks/useFilteredRepositories'

export default function RepositoriesPage(): JSX.Element {
  const { username } = useOutletContext<{ username: string }>()
  const { languages, types } = useFilterStore()
  const {
    data: repositories,
    isLoading,
    isError,
  } = useFilteredRepositories(username, languages, types)

  // console.log(repositories)

  // IMPROVE THIS LOADER
  if (isLoading) {
    return <Loader2 />
  }

  if (isError || !repositories?.length) {
    return <EmptyState />
  }

  return (
    <div className='flex w-full'>
      <RepositoriesList repositories={repositories} />
    </div>
  )
}
