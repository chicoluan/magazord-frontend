import { type UseQueryResult, useQuery } from '@tanstack/react-query'
import { api } from '@/api/github'
import type { User } from '@/types/User'

const userKeys = {
  getUser: (username: string) => ['user', username] as const,
}

const fetchUser = async (username: string) => {
  return api.get<User>(`users/${username}`).then((res) => res.data)
}

const useUser = (username: string): UseQueryResult<User | undefined, Error> => {
  return useQuery({
    queryKey: userKeys.getUser(username),
    queryFn: () => fetchUser(username),
    enabled: !!username,
  })
}

export { useUser }
