import { useState, type JSX } from 'react'
import { useOutletContext } from 'react-router'
import RepositoriesList from '@/components/repositories/RepositoriesList'
import { useFilterStore } from '@/store/useFilterStore'
import { useFilteredRepositories } from '@/hooks/useFilteredRepositories'
import EmptyState from '@/components/states/empty/EmptyState'
import LoadingState from '@/components/states/loading/LoadingState'
import PaginationData from '@/components/pagination/PaginationData'

const PER_PAGE = 10

export default function RepositoriesPage(): JSX.Element {
  const [page, setPage] = useState<number>(1)
  const { username } = useOutletContext<{ username: string }>()
  const { languages, types, search } = useFilterStore()
  const { data, isLoading, isError } = useFilteredRepositories(
    username,
    languages,
    types,
    search,
    page,
  )

  if (isLoading) return <LoadingState />
  if (isError || !data?.repositories.length) return <EmptyState />

  const { repositories, totalCount } = data

  const totalPages = Math.ceil(totalCount / PER_PAGE)

  return (
    <div className='flex flex-col w-full'>
      <RepositoriesList repositories={repositories} />
      <PaginationData page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  )
}
