<script setup lang="ts">
import type { NavigationItem } from '~/types'

const items: NavigationItem[] = [
  { name: 'Home', path: '/', icon: 'solar:home-smile-outline' },
  {
    name: 'Blog',
    path: '/posts',
    icon: 'solar:document-add-outline',
  },
  {
    name: 'Projects',
    path: '/projects',
    icon: 'solar:folder-with-files-outline',
  },
]
</script>

<template>
  <header
    class="relative w-full mx-auto space-y-4 md:flex md:items-center md:space-y-0 md:gap-x-4"
  >
    <div
      class="flex items-center bg-gray-900 justify-between py-2 px-6 md:flex-1 rounded-card"
    >
      <NuxtLink href="/" class="py-2">
        <Logo class="h-6 text-white" />
        <span class="sr-only">{{ title }}</span>
      </NuxtLink>
      <nav class="hidden md:flex md:space-x-4 lg:space-x-6" aria-label="Global">
        <NavigationMenuItem
          v-for="item in items"
          :key="item.name"
          :item="item"
        />
      </nav>
      <div class="flex items-center justify-end flex-shrink-0 space-x-2">
        <AppThemeToggle />
      </div>
    </div>

    <NavigationMobileMenu />
  </header>
</template>
