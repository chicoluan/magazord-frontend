import { githubApi } from '@/api/github'
import type { UserProps } from '@/types/user'
import { useEffect, useState, type JSX } from 'react'

export default function ProfilePage(): JSX.Element {
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
  return <div className="grid grid-cols-4 md:grid-cols-6 lg:flex"></div>
}
