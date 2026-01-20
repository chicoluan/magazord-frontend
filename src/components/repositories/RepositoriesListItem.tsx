import type { JSX } from 'react'
import type { Repository } from '@/types/Repository'
import { GitBranch, Star } from 'lucide-react'
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemTitle,
} from '../ui/item'

type RepositoriesListItemProps = {
  repository: Repository
}

export default function RepositoriesListItem({
  repository,
}: RepositoriesListItemProps): JSX.Element {
  return (
    <Item asChild>
      <a href='/' className='py-4'>
        <ItemContent>
          <ItemTitle className='text-lg'>{repository.name}</ItemTitle>
          <ItemDescription className='text-base'>
            {repository.description}
          </ItemDescription>
        </ItemContent>
        <ItemFooter className='flex items-center justify-start gap-8'>
          <div className='flex items-center gap-2'>
            <Star className='size-4' />
            <p>{repository.stargazers_count}</p>
          </div>

          <div className='flex items-center gap-2'>
            <GitBranch className='size-4' />
            <p>{repository.forks_count}</p>
          </div>
        </ItemFooter>
      </a>
    </Item>
  )
}
