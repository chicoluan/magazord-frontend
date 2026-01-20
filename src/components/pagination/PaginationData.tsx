import type { Dispatch, JSX, SetStateAction } from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination'

type PaginationDataProps = {
  page: number
  setPage: Dispatch<SetStateAction<number>>
  totalPages: number
}

export default function PaginationData({
  page,
  setPage,
  totalPages,
}: PaginationDataProps): JSX.Element {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            aria-disabled={page === 1}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink isActive>{page}</PaginationLink>
        </PaginationItem>
        {totalPages > 3 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            aria-disabled={page === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
