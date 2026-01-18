import type { JSX } from 'react'
import { useRepositories } from '@/hooks/useRepositories'
import { useOutletContext } from 'react-router'

type ProfilePageContext = {
  username: string
}

export default function ProfilePage(): JSX.Element {
  const { username } = useOutletContext<ProfilePageContext>()
  const { data: repositories } = useRepositories(username)

  console.log(repositories)

  // create a list of repos -- DO NOT FORGET

  return <></>
}
