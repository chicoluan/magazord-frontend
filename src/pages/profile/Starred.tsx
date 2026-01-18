import type { JSX } from 'react'

export default function StarredPage(): JSX.Element {
  return (
    <div className='col-span-4 w-full flex flex-1'>
      <div className='flex flex-col w-full items-center md:flex-row md:items-start'>
        {/* <CardUser
              avatar_url={user?.avatar_url}
              name={user?.name}
              bio={user?.bio}
              company={user?.company}
              location={user?.location}
            /> */}
        <div className='flex flex-col w-full items-center justify-center md:items-start gap-6'></div>
      </div>
    </div>
  )
}
