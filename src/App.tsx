import { useEffect, useState } from 'react'
import type { UserProps } from './types/user'
import { githubApi } from './config/api'

export default function App() {
  const [user, setUser] = useState<UserProps | null>()

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await githubApi
        .get<UserProps>('users/gabrielcordeiro-dev')
        .then((res) => res.data)

      setUser(response)
    }
    fetchUserData()
  }, [])

  console.log(user)

  return <h1>Magazord Frontend Github</h1>
}
