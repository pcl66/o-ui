export interface CollapseProps {
  modelValue: string[]
}

export interface CollapseEmits {
  (e: 'update:modelValue', value: string[]): void
}

export interface CollapseItemProps {
  name: string
  title: string
}