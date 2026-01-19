import { api } from '@/api/github'
import type { FilterOptionsLanguages, FilterOptionsTypes } from '@/types/Filter'
import type { Repository } from '@/types/Repository'

type FilterRepositoriesProps = {
  languages: FilterOptionsLanguages[]
  types: FilterOptionsTypes[]
  search: string
}

type RepositoriesFilterResponse = {
  total_count: number
  items: Repository[]
  incomplete_results: number
}

export async function filterRepositories(
  username: string,
  filters: FilterRepositoriesProps,
): Promise<Repository[]> {
  const { search, languages, types } = filters

  const initialQueryParams: string[] = [`user:${username}`]

  // Filter by Search
  if (search) initialQueryParams.push(search)

  // Filter by Language
  languages.forEach((language) =>
    initialQueryParams.push(`language:${language}`),
  )

  // Filter by Type
  types.forEach((type) => {
    if (type === 'forks') initialQueryParams.push('fork:true')
    if (type === 'sources') initialQueryParams.push('fork:false')
    if (type === 'archived') initialQueryParams.push('archived:true')
    if (type === 'mirrors') initialQueryParams.push('mirror:true')
  })

  const q = initialQueryParams.join(' ')

  const repositories = await api
    .get<RepositoriesFilterResponse>(`search/repositories`, { params: { q } })
    .then((res) => res.data)

  return repositories.items
}
