import NavBar from '@/components/nav/NavBar'
import { Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <main className='flex flex-col min-h-screen'>
      <NavBar />
      <Outlet />
    </main>
  )
}
