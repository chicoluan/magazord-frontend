import ProfileLayout from '@/layouts/ProfileLayout'
import RootLayout from '@/layouts/RootLayout'
import HomePage from '@/pages/HomePage'
import ProfilePage from '@/pages/ProfilePage'
import { createBrowserRouter } from 'react-router'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/profile',
        element: <ProfileLayout />,
        children: [
          {
            path: '/profile/repositories',
            element: <ProfilePage />,
          },
          {
            path: '/profile/starred',
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },
])
