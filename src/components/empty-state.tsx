import type { JSX } from 'react'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from './ui/empty'
import { ArrowUpRightIcon, FolderCode } from 'lucide-react'
import { Button } from './ui/button'

export default function EmptyState(): JSX.Element {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant='icon'>
          <FolderCode />
        </EmptyMedia>
        <EmptyTitle>No Repository Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any projects yet. Get started by creating
          your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className='flex gap-2'>
          <Button>Create Project</Button>
          <Button variant='outline'>Import Project</Button>
        </div>
      </EmptyContent>
      <Button
        variant='link'
        asChild
        className='text-muted-foreground'
        size='sm'
      >
        <a href='#'>
          Learn More <ArrowUpRightIcon />
        </a>
      </Button>
    </Empty>
  )
}
