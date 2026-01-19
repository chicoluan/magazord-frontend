import EmptyState from '@/components/empty-state'
import RepositoriesList from '@/components/repositories/RepositoriesList'
import { useStarred } from '@/hooks/useStarred'
import { Loader2 } from 'lucide-react'
import type { JSX } from 'react'
import { useOutletContext } from 'react-router'

export default function StarredPage(): JSX.Element {
  const { username } = useOutletContext<{ username: string }>()
  const { data: starred, isLoading, isError } = useStarred(username)

  if (isLoading) {
    return <Loader2 />
  }

  if (isError || !starred?.length) {
    return <EmptyState />
  }

  return <RepositoriesList repositories={starred} />
}
