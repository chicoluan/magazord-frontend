import NavBar from '@/components/NavBar'
import { Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-svh">
      <NavBar />
      <div className="flex mx-6">
        <Outlet />
      </div>
    </div>
  )
}
