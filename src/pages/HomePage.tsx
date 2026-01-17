import { Brand } from '@/components/ui/brand'
import { Github } from '@/components/ui/icons'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group'
import { useUserStore } from '@/store/useUserStore'
import { SearchIcon } from 'lucide-react'
import type React from 'react'
import type { JSX } from 'react'

export default function HomePage(): JSX.Element {
  const username = useUserStore((state) => state.username)
  const setUsername = useUserStore((state) => state.setUsername)

  const handleSearch = () => {
    if (!username) return
    setUsername(username)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.key)
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div className='col-span-4 md:col-span-6 lg:flex items-center w-full justify-center'>
      <div className='flex flex-col h-full w-full items-center justify-center gap-6 '>
        <div className='flex items-center justify-center text-primary gap-3'>
          <Github className='w-10 h-10' />
          <Brand className='h-10 w-auto' />
        </div>

        <InputGroup
          onKeyDown={handleKeyDown}
          className='max-w-sm border-primary'
        >
          <InputGroupInput
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder='Search username'
          />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupAddon align='inline-end'>
            <InputGroupButton
              onClick={handleSearch}
              className='hover:cursor-pointer'
            >
              Search
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  )
}
