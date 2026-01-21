import { createBrowserRouter, Navigate } from 'react-router'
import RootLayout from '@/layouts/layout'
import ProfileLayout from '@/layouts/profile/layout'
import HomePage from '@/pages/Home'
import RepositoriesPage from '@/pages/profile/Repositories'
import StarredPage from '@/pages/profile/Starred'

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
