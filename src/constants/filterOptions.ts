import type { FilterOption } from '@/types/Filter'

export const LANGUAGES_FILTER_OPTIONS: FilterOption[] = [
  { label: 'All', value: 'all' },
  { label: 'Java', value: 'Java' },
  { label: 'TypeScript', value: 'TypeScript' },
  { label: 'Archived', value: 'HTML' },
  { label: 'CSS', value: 'CSS' },
]

export const TYPE_FILTER_OPTIONS: FilterOption[] = [
  { label: 'All', value: 'all' },
  { label: 'Sources', value: 'Sources' },
  { label: 'Forks', value: 'Forks' },
  { label: 'Archived', value: 'Archived' },
  { label: 'Mirrors', value: 'Mirrors' },
]
