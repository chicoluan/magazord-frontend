import type { JSX } from 'react'
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '../../ui/empty'
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
    </Empty>
  )
}
