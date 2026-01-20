import { Loader2 } from 'lucide-react'
import type { JSX } from 'react'

export default function LoadingState(): JSX.Element {
  return (
    <div className='flex w-full h-full items-center justify-center flex-1'>
      <Loader2 className='size-8 stroke-1 animate-spin' />
    </div>
  )
}
