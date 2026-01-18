import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { JSX, ReactNode } from 'react'

type ReactQueryProviderProps = {
  children: ReactNode
}

const queryClient = new QueryClient()

export default function ReactQueryProvider({
  children,
}: ReactQueryProviderProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
