import RootLayout from '@/layouts/RootLayout'
import ProfilePage from '@/pages/ProfilePage'
import { createBrowserRouter } from 'react-router'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/profile',
        element: <ProfilePage />,
      },
    ],
  },
])
