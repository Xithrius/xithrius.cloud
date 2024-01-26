<script setup lang="ts">
import type { NavigationItem } from '~/types/navigation'

const items: NavigationItem[] = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Blog',
    to: '/posts',
  },
  {
    label: 'Showcase',
    to: '/showcase',
  },
  {
    label: 'ToDo',
    to: '/todo',
  }
]
</script>

<template>
  <header
    class="relative w-full mx-auto space-y-4 md:flex md:items-center md:space-y-0 md:gap-x-4"
  >
    <div
      class="flex items-center dark:bg-zinc-900 bg-zinc-200 justify-between py-2 px-6 md:flex-1 rounded-lg shadow-md"
    >
      <NuxtLink href="https://github.com/Xithrius">
        <Icon aria-hidden="true" name="iconoir:github" class="w-5 h-5" />
      </NuxtLink>
      <nav
        class="hidden md:flex md:space-x-4 lg:space-x-6"
        aria-label="Global navigation"
      >
        <NavigationMenuItem
          v-for="item in items"
          :key="item.label"
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
