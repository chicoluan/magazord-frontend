import type { InputHTMLAttributes, JSX } from 'react'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../ui/input-group'
import { Search } from 'lucide-react'

type SearchRepositoryInputProps = InputHTMLAttributes<HTMLInputElement> & {
  onSeach: (search: string) => void
  value: string
}

export default function SearchRepositoryInput({
  onSeach,
  value,
  ...props
}: SearchRepositoryInputProps): JSX.Element {
  return (
    <InputGroup onKeyDown={(e) => e.key === 'Enter' && onSeach(value)}>
      <InputGroupInput {...props} />
      <InputGroupAddon>
        <Search className='size-5 text-blue-500' />
      </InputGroupAddon>
    </InputGroup>
  )
}
