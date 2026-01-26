import type { JSX } from 'react'
import { Brand } from '../ui/brand'
import { Github } from '../ui/icons'

export default function NavBar(): JSX.Element {
  return (
    <div className='hidden w-full bg-primary p-6 md:flex'>
      <div className='col-span-2 flex gap-4 text-white'>
        <a href='https://github.com' target='_blank' rel='noopener'>
          <Github className='h-6 w-6' />
        </a>
        <a href='https://github.com' target='_blank' rel='noopener'>
          <Brand className='h-6 w-auto' />
        </a>
      </div>
    </div>
  )
}
