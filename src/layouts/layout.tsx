import { Outlet } from 'react-router'
import NavBar from '@/components/nav/NavBar'

export default function RootLayout() {
  return (
    <main className='flex flex-col min-h-screen'>
      <NavBar />
      <Outlet />
    </main>
  )
}
