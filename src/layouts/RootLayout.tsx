import NavBar from '@/components/NavBar'
import { Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="flex">
        <Outlet />
      </div>
    </div>
  )
}
