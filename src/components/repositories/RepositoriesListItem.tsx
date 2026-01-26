import { GitBranch, Star } from 'lucide-react'
import type { JSX } from 'react'
import type { Repository } from '@/types/Repository'
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
          <ItemTitle className='font-semibold text-lg'>
            {repository.full_name}
          </ItemTitle>
          <ItemDescription className='font-light text-sm'>
            {repository.description}
          </ItemDescription>
        </ItemContent>
        <ItemFooter className='flex items-center justify-start gap-2'>
          <div className='flex items-center gap-0.5'>
            <Star className='size-4 fill-accent-foreground' />
            <p>{repository.stargazers_count}</p>
          </div>

          <div className='flex items-center gap-0.5'>
            <GitBranch className='size-4' />
            <p>{repository.forks_count}</p>
          </div>
        </ItemFooter>
      </a>
    </Item>
  )
}
