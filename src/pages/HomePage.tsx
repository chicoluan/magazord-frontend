import { Brand } from '@/components/ui/brand'
import { Github } from '@/components/ui/icons'
import { useState, type JSX } from 'react'
import { useUserStore } from '@/store/useUserStore'
import { useNavigate } from 'react-router'
import SearchInput from '@/components/search-input/SearchInput'

export default function HomePage(): JSX.Element {
  const navigate = useNavigate()
  const [inputUsername, setInputUsername] = useState('')
  const setUsername = useUserStore((state) => state.setUsername)

  const handleSearch = () => {
    if (!inputUsername) return
    setUsername(inputUsername)
    navigate('/profile')
  }

  return (
    <div className='col-span-4 md:col-span-6 lg:flex items-center w-full justify-center'>
      <div className='flex flex-col h-full w-full items-center justify-center gap-6 '>
        <div className='flex items-center justify-center text-primary gap-3'>
          <Github className='w-10 h-10' />
          <Brand className='h-10 w-auto' />
        </div>

        <SearchInput
          onChange={(e) => setInputUsername(e.target.value)}
          value={inputUsername}
          onSeach={handleSearch}
        />
      </div>
    </div>
  )
}
