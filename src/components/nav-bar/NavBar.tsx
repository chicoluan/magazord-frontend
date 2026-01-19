import type { JSX } from 'react'
import { Github } from '../ui/icons'
import { Brand } from '../ui/brand'

export default function NavBar(): JSX.Element {
  return (
    <div className='hidden md:flex w-full bg-primary p-6 sticky'>
      <div className='flex col-span-2 gap-4 text-white'>
        <a href='https://github.com' target='_blank'>
          <Github className='h-6 w-6' />
        </a>
        <a href='https://github.com' target='_blank'>
          <Brand className='h-6 w-auto' />
        </a>
      </div>
    </div>
  )
}
