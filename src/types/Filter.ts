import { LANGUAGES_OPTIONS, type TYPE_OPTIONS } from '@/constants/filterOptions'

export type FilterLanguage = (typeof LANGUAGES_OPTIONS)[number]

export type FilterType = (typeof TYPE_OPTIONS)[number]

export type FilterOption<T extends string> = {
  label: string
  value: T
}
