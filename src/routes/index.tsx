import ProfileLayout from '@/layouts/ProfileLayout'
import RootLayout from '@/layouts/RootLayout'
import HomePage from '@/pages/HomePage'
import ProfilePage from '@/pages/ProfilePage'
import { createBrowserRouter, Navigate } from 'react-router'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'profile',
        element: <ProfileLayout />,
        children: [
          {
            index: true,
            element: <Navigate to='repositories' replace />,
          },
          {
            path: 'repositories',
            element: <ProfilePage />,
          },
          {
            path: 'starred',
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },
])
