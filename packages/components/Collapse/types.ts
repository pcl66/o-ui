export interface CollapseProps {
  modelValue: string[]
  // 手风琴
  accordion?: boolean
}

export interface CollapseEmits {
  (e: 'update:modelValue', value: string[]): void
  (e: 'change', value: string[]): void
}

export interface CollapseItemProps {
  name: string
  title: string
}