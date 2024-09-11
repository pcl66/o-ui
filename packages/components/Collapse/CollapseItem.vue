<script setup lang='ts'>
import { computed, inject } from 'vue';
import type { CollapseItemProps } from './types'
import { COLLAPSE_KEY } from './constant';

defineOptions({
  name: 'OCollapseItem'
})
const props = defineProps<CollapseItemProps>()

const {
  activeItems,
  updateActiveItems,
  accordion
}  = inject(COLLAPSE_KEY)!

const isActive = computed(() => activeItems.value.includes(props.name))

const hClick = () => {
  if(isActive.value) {
    if(accordion) {
      updateActiveItems([])
    } else {
      updateActiveItems(activeItems.value.filter(v =>v !== props.name))
    }
  } else {
    if(accordion) {
      updateActiveItems([props.name])
    } else {
      updateActiveItems([...activeItems.value, props.name])
    }
  }
}

</script>

<template>
  <div class="o-collapse-item">
    <div class="o-collapse-item__header" @click="hClick">{{ title }}</div>
    <div class="o-collapse-item__content" :style="{ display: isActive ? 'block': 'none' }">
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
