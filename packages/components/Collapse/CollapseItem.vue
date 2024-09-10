<script setup lang='ts'>
import { inject } from 'vue';
import type { CollapseItemProps } from './types'
import { COLLAPSE_KEY } from './constant';

defineOptions({
  name: 'OCollapseItem'
})
const props = defineProps<CollapseItemProps>()
const p = inject(COLLAPSE_KEY)
const { activeItems, updateActiveItems }  = p!

const hClick = () => {
  if(activeItems.value.includes(props.name)) {
    updateActiveItems(activeItems.value.filter(v =>v !== props.name))
  } else {
    updateActiveItems([...activeItems.value, props.name])
  }
}

</script>

<template>
  <div class="o-collapse-item">
    <div class="o-collapse-item__header" @click="hClick">{{ title }}</div>
    <div class="o-collapse-item__content" :style="{ display: activeItems.includes(name) ? 'block': 'none' }">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.o-collapse-item {
  border-top: 1px solid #5c5f65;
  &:last-of-type {
    border-bottom: 1px solid #5c5f65;
  }
}
</style>
