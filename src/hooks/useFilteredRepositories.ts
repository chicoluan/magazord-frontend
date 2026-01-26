import { type UseQueryResult, useQuery } from '@tanstack/react-query'
import { filterRepositories } from '@/services/repositories/filterRepositories'
import type { FilterOptionsLanguages, FilterOptionsTypes } from '@/types/Filter'
import type { Repository } from '@/types/Repository'

type FiltersParams = {
  languages: FilterOptionsLanguages[]
  types: FilterOptionsTypes[]
  search: string
  page: number
}

type ResponseParams = {
  repositories: Repository[]
  totalCount: number
}

const filteredRepositoriesKeys = {
  repositories: (username: string, filters: FiltersParams) =>
    ['filtered', 'repositories', username, filters] as const,
}

const fetchFilteredRepositories = async (
  username: string,
  filters: FiltersParams,
) => {
  const { items, total_count } = await filterRepositories(username, filters)
  return {
    repositories: items,
    totalCount: total_count,
  }
}

const useFilteredRepositories = (
  username: string,
  languages: FilterOptionsLanguages[],
  types: FilterOptionsTypes[],
  search: string,
  page: number,
): UseQueryResult<ResponseParams | undefined, Error> => {
  const filters = {
    languages,
    types,
    search,
    page,
  }
  return useQuery({
    queryKey: filteredRepositoriesKeys.repositories(username, filters),
    queryFn: () => fetchFilteredRepositories(username, filters),
    enabled: !!username,
  })
}

export { useFilteredRepositories }
