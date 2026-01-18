import type { JSX } from 'react'
import { Navigate, Outlet, useParams } from 'react-router'

export default function ProfileLayout(): JSX.Element {
  const { username } = useParams<{ username: string }>()

  if (!username) {
    return <Navigate to='/' replace />
  }

  return (
    <div className='grid grid-cols-4 md:grid-cols-6 lg:flex lg:w-full gap-6 px-6 flex-1'>
      <div className='col-span-4 md:col-span-6 lg:flex w-full justify-center lg:pt-10'>
        <Outlet context={{ username }} />
      </div>
    </div>
  )
}

// ;<div className='col-span-4 w-full flex flex-1'>
//   <div className='flex flex-col w-full items-center md:flex-row md:items-start'>
//     {/*
//     <CardUser
//       avatar_url="{user?.avatar_url}"
//       name="{user?.name}"
//       bio="{user?.bio}"
//       company="{user?.company}"
//       location="{user?.location}"
//     />
//     */}
//     <div className='flex flex-col w-full items-center justify-center md:items-start gap-6'>
//       <NavMenu />
//     </div>
//   </div>
// </div>
