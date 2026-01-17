import { Brand } from '@/components/ui/brand'
import { Github } from '@/components/ui/icons'
import { useState, type JSX } from 'react'
import type React from 'react'
import { SearchIcon } from 'lucide-react'
import { useUserStore } from '@/store/useUserStore'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group'
import { Link, useNavigate } from 'react-router'

export default function HomePage(): JSX.Element {
  const navigate = useNavigate()
  const [inputUsername, setInputValue] = useState('')
  const setUsername = useUserStore((state) => state.setUsername)

  const handleSearch = () => {
    if (!inputUsername) return
    setUsername(inputUsername)
    navigate('/profile')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
          className='max-w-sm border-primary'
          onKeyDown={handleKeyDown}
        >
          <InputGroupInput
            value={inputUsername}
            placeholder='Search username'
            onChange={(e) => setInputValue(e.target.value)}
          />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupAddon align='inline-end'>
            <Link to='/profile'>
              <InputGroupButton
                onClick={handleSearch}
                className='hover:cursor-pointer'
              >
                Search
              </InputGroupButton>
            </Link>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  )
}
