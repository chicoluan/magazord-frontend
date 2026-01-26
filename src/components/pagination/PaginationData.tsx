import type { Dispatch, JSX, SetStateAction } from 'react'
import {
  Pagination,
  PaginationContent,
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
            className='font-light'
            aria-disabled={page === 1}
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
          />
        </PaginationItem>

        {Array.from({ length: totalPages }).map((_, index) => {
          const currentPage = index + 1
          return (
            <PaginationItem key={currentPage}>
              <PaginationLink isActive={index === currentPage} size='icon'>
                {currentPage}
              </PaginationLink>
            </PaginationItem>
          )
        })}

        <PaginationItem>
          <PaginationNext
            className='font-light'
            aria-disabled={page === totalPages}
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
