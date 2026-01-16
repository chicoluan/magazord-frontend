import type { JSX } from 'react'
import { Github } from './ui/icons'

export default function NavBar(): JSX.Element {
  return (
    <div className='flex w-full bg-primary p-6'>
      <div className='flex col-span-2 gap-4'>
        <Github className='size-6' />
        <h1 className='text-primary-foreground'>Github</h1>
        <p className='text-primary-foreground'>Profile</p>
      </div>
    </div>
  )
}
