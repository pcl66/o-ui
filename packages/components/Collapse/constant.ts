import type { InjectionKey, Ref } from 'vue'
export const COLLAPSE_KEY = Symbol() as InjectionKey<{
  activeItems: Ref<string[]>
  updateActiveItems: (val: string[]) => void
  accordion?: boolean
}>