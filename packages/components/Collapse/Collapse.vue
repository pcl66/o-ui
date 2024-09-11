<script setup lang='ts'>
import { provide, ref } from 'vue';
import type { CollapseEmits, CollapseProps } from './types';
import { COLLAPSE_KEY } from './constant';

defineOptions({
  name: 'OCollapse'
})
const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()

const activeItems = ref<string[]>(props.modelValue)
const updateActiveItems = (val: string[]) => {
  activeItems.value = val
  emits('update:modelValue', val)
  emits('change', val)
}

provide(COLLAPSE_KEY, {
  activeItems,
  updateActiveItems,
  accordion: props.accordion
})

</script>

<template>
  <div class="o-collapse">
    <slot />
  </div>
</template>

<style>

</style>
