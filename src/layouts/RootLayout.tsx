import NavBar from '@/components/nav-bar/NavBar'
import { Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <main className='flex flex-col min-h-svh'>
      <NavBar />
      <Outlet />
    </main>
  )
}
