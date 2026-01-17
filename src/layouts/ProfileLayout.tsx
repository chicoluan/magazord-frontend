import type { JSX } from 'react'
import { Outlet } from 'react-router'

export default function ProfileLayout(): JSX.Element {
  return (
    <div className='grid grid-cols-4 md:grid-cols-6 lg:flex lg:w-full gap-6 px-6 flex-1'>
      <div className='col-span-4 md:col-span-6 lg:flex w-full justify-center lg:pt-10'>
        <Outlet />
      </div>
    </div>
  )
}
