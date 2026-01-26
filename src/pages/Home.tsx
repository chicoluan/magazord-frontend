import { type JSX, useState } from 'react'
import { useNavigate } from 'react-router'
import SearchUserInput from '@/components/inputs/SearchUserInput'
import { Brand } from '@/components/ui/brand'
import { Github } from '@/components/ui/icons'

export default function HomePage(): JSX.Element {
  const navigate = useNavigate()
  const [inputUsername, setInputUsername] = useState('')

  const handleSearch = () => {
    if (!inputUsername.trim()) return
    navigate(`/${inputUsername}/repositories`)
  }

  return (
    <div className='flex w-full flex-1 flex-col items-center justify-center gap-6'>
      {/* Github Logo and Brand */}
      <div className='flex items-center justify-center gap-3 text-primary'>
        <Github className='h-10 w-10' />
        <Brand className='h-10 w-auto' />
      </div>

      {/* Search Username */}
      <SearchUserInput
        className='border-primary'
        placeholder='Search username'
        onChange={(e) => setInputUsername(e.target.value)}
        value={inputUsername}
        onSeach={handleSearch}
      />
    </div>
  )
}
