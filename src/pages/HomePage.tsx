import { Input } from '@/components/ui/input'
import type { JSX } from 'react'

export default function HomePage(): JSX.Element {
  return (
    <div className='flex items-center w-full justify-center'>
      <div className='flex flex-col gap-2'>
        <h1>Digite o nome do usuário</h1>
        <Input className='w-lg' type='text' />
      </div>
    </div>
  )
}
