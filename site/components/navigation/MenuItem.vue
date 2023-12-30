<script setup lang="ts">
import type { NavigationItem } from '~~/types'

defineProps<{
  item: NavigationItem;
}>()
</script>
<template>
  <NuxtLink
    :href="item.path"
    class="relative px-3 py-4 flex items-center justify-center transition hover:text-primary-400 dark:hover:text-primary-400"
    active-class="text-primary-500 dark:text-primary-500"
    :target="'_self'"
  >
    {{ item.name }}
  </NuxtLink>
</template>
