export type User = {
  login: string
  avatar_url: string
  starred_url: string
  repos_url: string
  name: string | null
  bio: string | null
  company: string | null
  location: string | null
  blog: string | null
  public_repos: number
  total_private_repos: number
  owned_private_repos: number
}
