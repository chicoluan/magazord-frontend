import ProfileLayout from '@/layouts/ProfileLayout'
import RootLayout from '@/layouts/RootLayout'
import HomePage from '@/pages/Home'
import ProfilePage from '@/pages/profile/Repositories'
import StarredPage from '@/pages/profile/Starred'
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
        path: ':username',
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
            element: <StarredPage />,
          },
        ],
      },
    ],
  },
])
