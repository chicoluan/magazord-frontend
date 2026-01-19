import type { JSX } from 'react'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '../ui/empty'
import { ArrowLeft } from 'lucide-react'
import { Button } from '../ui/button'

export default function EmptyState(): JSX.Element {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia className='text-4xl' variant='icon'>
          😕
        </EmptyMedia>
        <EmptyTitle>No Repository</EmptyTitle>
        <EmptyDescription>
          This profile does not have any repository yet.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className='flex flex-col'>
          <Button variant='ghost'>
            <ArrowLeft /> Back
          </Button>
        </div>
      </EmptyContent>
    </Empty>
  )
}
