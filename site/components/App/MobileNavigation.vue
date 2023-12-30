<script setup>
const links = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Blog',
    to: '/posts',
  },
  {
    label: 'Projects',
    to: '/projects',
  },
  {
    label: 'ToDo',
    to: '/todo',
  },
]
</script>

<template>
  <UVerticalNavigation
    :links="links"
    :ui="{
      wrapper: 'border-s border-gray-200 dark:border-gray-800 space-y-2',
      base: 'group block border-s -ms-px before:hidden',
      rounded: '',
      font: '',
      ring: '',
      active:
        'text-primary-500 dark:text-primary-400 border-current font-semibold',
      inactive:
        'border-transparent hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300',
    }"
    class="p-2"
  />
</template>
