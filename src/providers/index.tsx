import type { JSX } from 'react'
import { RouterProvider } from 'react-router'
import { router } from '@/routes'
import ReactQueryProvider from './ReactQueryProvider'

export default function Providers(): JSX.Element {
  return (
    <ReactQueryProvider>
      <RouterProvider router={router} />
    </ReactQueryProvider>
  )
}
