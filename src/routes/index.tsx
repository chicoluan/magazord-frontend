import ProfileLayout from '@/layouts/profile/ProfileLayout'
import RootLayout from '@/layouts/RootLayout'
import HomePage from '@/pages/Home'
import RepositoriesPage from '@/pages/profile/Repositories'
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
            element: <RepositoriesPage />,
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
