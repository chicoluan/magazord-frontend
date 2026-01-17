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
    navigate('/profile/repositories')
  }

  return (
    <div className='flex flex-col flex-1 w-full items-center justify-center gap-6 '>
      {/* Github Logo and Brand */}
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
  )
}
