import type { LucideIconName } from '@/components/ui/dynamicIcon'
import type { SocialAccount } from '@/types/SocialAccount'

type SocialAccountFormatted = SocialAccount & {
  icon: LucideIconName
  username: string
}

export const formatSocialAccounts = (
  accounts: SocialAccount[],
): SocialAccountFormatted[] => {
  return accounts.map((account) => {
    const icon = (account.provider.charAt(0).toLocaleUpperCase() +
      account.provider.slice(1)) as LucideIconName

    const username = getUsernameFromUrl(account.url)

    return {
      ...account,
      icon,
      username,
    }
  })
}

export const getUsernameFromUrl = (url: string): string => {
  try {
    const { pathname } = new URL(url)
    return pathname.replace(/^\/|\/$/g, '')
  } catch (error) {
    console.log(error)
    return ''
  }
}
