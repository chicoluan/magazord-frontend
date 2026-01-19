import type { JSX } from 'react'
import ReactQueryProvider from './ReactQueryProvider'
import { RouterProvider } from 'react-router'
import { router } from '@/routes'

export default function Providers(): JSX.Element {
  return (
    <ReactQueryProvider>
      <RouterProvider router={router} />
    </ReactQueryProvider>
  )
}
