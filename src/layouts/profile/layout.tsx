import type { JSX } from 'react'
import { Navigate, Outlet, useParams } from 'react-router'
import ProfileInfo from '@/components/profile/ProfileInfo'
import ProfileMenu from '@/components/profile/ProfileMenu'
import LoadingState from '@/components/states/loading/LoadingState'
import { useSocialAccounts } from '@/hooks/useSocialAccounts'
import { useUser } from '@/hooks/useUser'

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
    <div className='flex-1 w-full flex'>
      <div className='flex flex-col md:flex-row w-full gap-6 px-6 pt-10'>
        <div className='lg:w-1/4'>
          <ProfileInfo user={user} socialAccounts={socialAccounts} />
        </div>

        <div className='flex flex-col w-full lg:w-3/4 gap-4'>
          <ProfileMenu />
          <Outlet context={{ username }} />
        </div>
      </div>
    </div>
  )
}
