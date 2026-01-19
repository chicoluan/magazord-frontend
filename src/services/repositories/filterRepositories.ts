import { api } from '@/api/github'
import type { FilterOptionsLanguages, FilterOptionsTypes } from '@/types/Filter'
import type { Repository } from '@/types/Repository'

type FilterRepositoriesProps = {
  username: string
  languages: FilterOptionsLanguages[]
  types: FilterOptionsTypes[]
}

export async function filterRepositories({
  username,
  languages,
  types,
}: FilterRepositoriesProps): Promise<Repository[]> {
  const initialQueryParams: string[] = [`user:${username}`]

  languages.forEach((language) =>
    initialQueryParams.push(`language:${language}`),
  )

  types.forEach((type) => {
    if (type === 'forks') {
      initialQueryParams.push('fork:true')
    }
    if (type === 'sources') {
      initialQueryParams.push('fork:false')
    }
    if (type === 'archived') {
      initialQueryParams.push('archived:true')
    }
  })

  const q = initialQueryParams.join(' ')

  const repositories = await api
    .get<Repository[]>(`search/repositories`, { params: { q } })
    .then((res) => res.data)

  return repositories
}
