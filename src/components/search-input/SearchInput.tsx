import type { InputHTMLAttributes, JSX } from 'react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '../ui/input-group'
import { SearchIcon } from 'lucide-react'

type SearchInputProps = InputHTMLAttributes<HTMLInputElement> & {
  onSeach: () => void
}

export default function SearchInput({
  onSeach,
  ...props
}: SearchInputProps): JSX.Element {
  return (
    <InputGroup
      className='max-w-sm border-primary'
      onKeyDown={(e) => e.key === 'Enter' && onSeach()}
    >
      <InputGroupInput {...props} />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupAddon align='inline-end'>
        <InputGroupButton onClick={onSeach} className='hover:cursor-pointer'>
          Search
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}
