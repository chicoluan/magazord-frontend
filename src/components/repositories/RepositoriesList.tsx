import type { Repository } from '@/types/Repository'
import { Fragment, type JSX } from 'react'
import RepositoriesListItem from './RepositoriesListItem'
import { Separator } from '../ui/separator'
import { ItemGroup } from '../ui/item'

type RepositoriesListProps = {
  repositories: Repository[]
}

export default function RepositoriesList({
  repositories,
}: RepositoriesListProps): JSX.Element {
  return (
    <ItemGroup className='flex flex-col gap-3'>
      {repositories?.map((repository, index) => (
        <Fragment key={repository.id}>
          <RepositoriesListItem repository={repository} />
          {index < repositories.length - 1 && <Separator />}
        </Fragment>
      ))}
    </ItemGroup>
  )
}
