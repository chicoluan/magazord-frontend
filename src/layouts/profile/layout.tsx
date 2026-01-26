import type { JSX } from 'react'
import ProfileInfo from '@/components/profile/ProfileInfo'
import ProfileHeader from '@/components/profile/ProfileHeader'
import LoadingState from '@/components/states/loading/LoadingState'
import { useUser } from '@/hooks/useUser'
import { Navigate, Outlet, useParams } from 'react-router'
import { useSocialAccounts } from '@/hooks/useSocialAccounts'

export default function ProfileLayout(): JSX.Element {
  const { username } = useParams<{ username: string }>()
  const {
    data: user,
    isLoading: isLoadingUser,
    isError: isErrorUser,
  } = useUser(username ?? '')
  const {
    data: socialAccounts,
    isLoading: isLoadingSocialAccounts,
    isError: isErrorSocialAccounts,
  } = useSocialAccounts(username ?? '')

  const isError = isErrorUser || isErrorSocialAccounts
  const isLoading = isLoadingUser || isLoadingSocialAccounts

  if (!username) {
    return <Navigate to='/' replace />
  }

  if (isLoading) {
    return <LoadingState />
  }

  if (isError || !user) {
    return <Navigate to='/' />
  }

  return (
    <div className='flex w-full flex-1'>
      <div className='mx-auto flex w-7xl flex-col gap-6 px-6 pt-10 md:flex-row'>
        <div className='lg:w-1/4'>
          <ProfileInfo user={user} socialAccounts={socialAccounts} />
        </div>

        <div className='flex w-full flex-col gap-4 lg:w-3/4'>
          <ProfileHeader
            totalPrivateRepositories={user.total_private_repos}
            totalPublicRepositories={user.public_repos}
          />
          <Outlet context={{ username }} />
        </div>
      </div>
    </div>
  )
}
