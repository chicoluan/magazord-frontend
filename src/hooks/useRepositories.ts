import { api } from '@/api/github'
import type { Repository } from '@/types/Repository'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'

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
): UseQueryResult<Repository[] | Error, undefined> => {
  return useQuery({
    queryKey: repositoriesKeys.getRepositories(username),
    queryFn: () => fetchRepositories(username),
    enabled: !!username,
  })
}

export { useRepositories }
