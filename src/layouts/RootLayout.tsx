import NavBar from '@/components/NavBar'
import { Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <main className='flex flex-col min-h-svh'>
      <NavBar />
      <div className='grid grid-cols-4 md:grid-cols-6 lg:flex lg:min-w-7xl gap-6 px-6 mx-auto flex-1'>
        <Outlet />
      </div>
    </main>
  )
}
