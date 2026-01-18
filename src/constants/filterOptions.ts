import type { FilterLanguage, FilterOption, FilterType } from '@/types/Filter'

export const LANGUAGES_OPTIONS: FilterOption<FilterLanguage>[] = [
  { label: 'All', value: 'All' },
  { label: 'Java', value: 'Java' },
  { label: 'TypeScript', value: 'Typescript' },
  { label: 'HTML', value: 'HTML' },
  { label: 'CSS', value: 'CSS' },
]

export const TYPE_OPTIONS: FilterOption<FilterType>[] = [
  { label: 'All', value: 'All' },
  { label: 'Sources', value: 'Sources' },
  { label: 'Forks', value: 'Forks' },
  { label: 'Archived', value: 'Archived' },
  { label: 'Mirrors', value: 'Mirrors' },
]
