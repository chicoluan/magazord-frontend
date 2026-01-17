import { api } from '@/api/github'
import type { User } from '@/types/user'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'

const userKeys = {
  getUser: (username: string) => ['user', username] as const,
}

const fetchUser = async (username: string) => {
  return api.get<User>(`users/${username}`).then((res) => res.data)
}

const useUsername = (username: string): UseQueryResult<User | null, Error> => {
  return useQuery({
    queryKey: userKeys.getUser(username),
    queryFn: () => fetchUser(username),
    enabled: !!username,
  })
}

export { useUsername }
