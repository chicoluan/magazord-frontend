import { api } from '@/api/github'
import type { SocialAccount } from '@/types/SocialAccount'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'

const socialAccountsKeys = {
  getSocialAccounts: (username: string) =>
    ['socialAccounts', username] as const,
}

const fetchSocialAccounts = async (username: string) => {
  return api
    .get<SocialAccount[]>(`users/${username}/social_accounts`)
    .then((res) => res.data)
}

const useSocialAccounts = (
  username: string,
): UseQueryResult<SocialAccount[] | undefined, Error> => {
  return useQuery({
    queryKey: socialAccountsKeys.getSocialAccounts(username),
    queryFn: () => fetchSocialAccounts(username),
    enabled: !!username,
  })
}

export { useSocialAccounts }
