import { api } from '@/api/github'
import type { Repository } from '@/types/Repository'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'

const starredKeys = {
  getStarred: (username: string) => ['starred', username] as const,
}

const fetchStarred = async (username: string) => {
  return await api
    .get<Repository[]>(`users/${username}/starred`)
    .then((res) => res.data)
}

const useStarred = (
  username: string,
): UseQueryResult<Repository[] | undefined, Error> => {
  return useQuery({
    queryKey: starredKeys.getStarred(username),
    queryFn: () => fetchStarred(username),
    enabled: !!username,
  })
}

export { useStarred }
