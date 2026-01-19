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
    <div className='grid grid-cols-4 md:grid-cols-6 lg:flex lg:w-full gap-6 px-6 pt-10'>
      <div className='col-span-4 md:col-span-2 lg:w-1/4 '>
        <ProfileInfo user={user} />
      </div>
      <div className='col-span-4 md:col-span-2 lg:w-3/4'>
        <ProfileMenu />
        <Outlet context={{ username }} />
      </div>
    </div>
  )
}
