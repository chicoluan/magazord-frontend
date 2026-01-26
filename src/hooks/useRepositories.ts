import { type UseQueryResult, useQuery } from '@tanstack/react-query'
import { api } from '@/api/github'
import type { Repository } from '@/types/Repository'

const repositoriesKeys = {
  getRepositories: (username: string) => ['repositories', username] as const,
}

const fetchRepositories = async (username: string) => {
  return api
    .get<Repository[]>(`users/${username}/repos`)
    .then((res) => res.data)
}

const useRepositories = (
  username: string,
): UseQueryResult<Repository[] | undefined, Error> => {
  return useQuery({
    queryKey: repositoriesKeys.getRepositories(username),
    queryFn: () => fetchRepositories(username),
    enabled: !!username,
  })
}

export { useRepositories }
