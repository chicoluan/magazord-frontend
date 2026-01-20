import type { JSX } from 'react'
import { useOutletContext } from 'react-router'
import RepositoriesList from '@/components/repositories/RepositoriesList'
import { useFilterStore } from '@/store/useFilterStore'
import { useFilteredRepositories } from '@/hooks/useFilteredRepositories'
import EmptyState from '@/components/states/empty/EmptyState'
import LoadingState from '@/components/states/loading/LoadingState'

export default function RepositoriesPage(): JSX.Element {
  const { username } = useOutletContext<{ username: string }>()
  const { languages, types, search } = useFilterStore()
  const {
    data: repositories,
    isLoading,
    isError,
  } = useFilteredRepositories(username, languages, types, search)

  if (isLoading) {
    return <LoadingState />
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
