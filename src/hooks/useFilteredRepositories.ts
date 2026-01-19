import { filterRepositories } from '@/services/repositories/filterRepositories'
import type { FilterOptionsLanguages, FilterOptionsTypes } from '@/types/Filter'
import type { Repository } from '@/types/Repository'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'

type FiltersParams = {
  languages: FilterOptionsLanguages[]
  types: FilterOptionsTypes[]
  search: string
}

const filteredRepositoriesKeys = {
  repositories: (username: string, filters: FiltersParams) =>
    ['filtered', 'repositories', username, filters] as const,
}

const fetchFilteredRepositories = async (
  username: string,
  filters: FiltersParams,
) => {
  return await filterRepositories(username, filters)
}

const useFilteredRepositories = (
  username: string,
  languages: FilterOptionsLanguages[],
  types: FilterOptionsTypes[],
  search: string,
): UseQueryResult<Repository[] | undefined, Error> => {
  const filters = {
    languages,
    types,
    search,
  }
  return useQuery({
    queryKey: filteredRepositoriesKeys.repositories(username, filters),
    queryFn: () => fetchFilteredRepositories(username, filters),
    enabled: !!username,
  })
}

export { useFilteredRepositories }
