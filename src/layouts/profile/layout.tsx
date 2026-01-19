import ProfileInfo from '@/components/profile/ProfileInfo'
import ProfileMenu from '@/components/profile/ProfileMenu'
import { useUser } from '@/hooks/useUser'
import { Loader2 } from 'lucide-react'
import type { JSX } from 'react'
import { Navigate, Outlet, useParams } from 'react-router'

export default function ProfileLayout(): JSX.Element {
  const { username } = useParams<{ username: string }>()
  const { data: user, isLoading, isError } = useUser(username ?? '')

  if (!username) {
    return <Navigate to='/' replace />
  }

  // REPLACE FOR SKELETON LOADER
  if (isLoading) {
    return <Loader2 />
  }

  if (isError || !user) {
    return <Navigate to='/' />
  }

  return (
    <div className='flex-1 w-full flex'>
      <div className='flex flex-col md:flex-row w-full gap-6 px-6 pt-10'>
        <div className='lg:w-1/4'>
          <ProfileInfo user={user} />
        </div>

        <div className='w-full lg:w-3/4'>
          <ProfileMenu />
          <Outlet context={{ username }} />
        </div>
      </div>
    </div>
  )
}
