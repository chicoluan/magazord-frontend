import { Fragment, type JSX } from 'react'
import type { Repository } from '@/types/Repository'
import { ItemGroup } from '../ui/item'
import { Separator } from '../ui/separator'
import RepositoriesListItem from './RepositoriesListItem'

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
