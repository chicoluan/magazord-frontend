import { Brand } from '@/components/ui/brand'
import { Github } from '@/components/ui/icons'
import { useState, type JSX } from 'react'
import { useNavigate } from 'react-router'
import SearchInput from '@/components/search-input/SearchInput'

export default function HomePage(): JSX.Element {
  const navigate = useNavigate()
  const [inputUsername, setInputUsername] = useState('')

  const handleSearch = () => {
    if (!inputUsername.trim()) return
    navigate(`/${inputUsername}/repositories`)
  }

  return (
    <div className='flex flex-col flex-1 w-full items-center justify-center gap-6 '>
      {/* Github Logo and Brand */}
      <div className='flex items-center justify-center text-primary gap-3'>
        <Github className='w-10 h-10' />
        <Brand className='h-10 w-auto' />
      </div>

      {/* Search Username */}
      <SearchInput
        placeholder='Search username'
        onChange={(e) => setInputUsername(e.target.value)}
        value={inputUsername}
        onSeach={handleSearch}
      />
    </div>
  )
}
