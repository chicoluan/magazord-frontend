import { filterRepositories } from '@/services/repositories/filterRepositories'
import type { FilterOptionsLanguages, FilterOptionsTypes } from '@/types/Filter'
import type { Repository } from '@/types/Repository'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'

const filteredRepositoriesKeys = {
  repositories: (
    username: string,
    languages: FilterOptionsLanguages[],
    types: FilterOptionsTypes[],
  ) => ['filtered', 'repositories', username, languages, types] as const,
}

const useFilteredRepositories = (
  username: string,
  languages: FilterOptionsLanguages[],
  types: FilterOptionsTypes[],
): UseQueryResult<Repository[] | undefined, Error> => {
  return useQuery({
    queryKey: filteredRepositoriesKeys.repositories(username, languages, types),
    queryFn: () =>
      filterRepositories({
        username,
        languages,
        types,
      }),
    enabled: !!username,
  })
}

export { useFilteredRepositories }
