import { useData as useData$ } from 'vitepress'
import type { AMWTheme } from '../types/index'

export const useData: typeof useData$<AMWTheme.Config> = useData$
