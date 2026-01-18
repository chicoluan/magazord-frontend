import { create } from 'zustand'
import type { FilterLanguage, FilterType } from '@/types/Filter'

export type FilterStore = {
  languages: FilterLanguage[]
  types: FilterType[]
  toggleLanguage: (language: FilterLanguage) => void
  toggleType: (type: FilterType) => void
}

export const useFilterStore = create<FilterStore>((set) => ({
  languages: [],
  types: [],

  toggleLanguage: (language) =>
    set((state) => {
      return {
        languages: state.languages.includes(language)
          ? state.languages.filter((l) => l !== language)
          : [...state.languages, language],
      }
    }),

  toggleType: (type) =>
    set((state) => ({
      types: state.types.includes(type)
        ? state.types.filter((t) => t !== type)
        : [...state.types, type],
    })),
}))
