import NavBar from '@/components/nav-bar/NavBar'
import { Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <main className='flex flex-col w-screen min-h-screen'>
      <NavBar />
      <Outlet />
    </main>
  )
}
