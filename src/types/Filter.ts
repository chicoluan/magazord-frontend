import type { LANGUAGES_OPTIONS, TYPE_OPTIONS } from '@/constants/filterOptions'

export type Filter = 'languages' | 'type'

export type FilterOption<T extends string> = {
  label: string
  value: T
}

export type FilterOptionsLanguages = (typeof LANGUAGES_OPTIONS)[number]
export type FilterOptionsTypes = (typeof TYPE_OPTIONS)[number]
