export type FilterLanguage = 'All' | 'Java' | 'Typescript' | 'HTML' | 'CSS'

export type FilterType = 'All' | 'Sources' | 'Forks' | 'Archived' | 'Mirrors'

// This extends make the type generic
export type FilterOption<T extends string> = {
  label: string
  value: T
}
