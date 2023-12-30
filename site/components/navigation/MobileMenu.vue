<script setup lang="ts">
import type { NavigationItem } from '~~/types'

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

const route = useRoute()

const isOpen = ref(false)
const subMenuOpen = ref(false)

const toggle = () => {
	isOpen.value = !isOpen.value
	subMenuOpen.value = false
}

// Watch route changes and close the menu
watch(
	() => route.path,
	() => {
		isOpen.value = false
	},
)

// Disbale scrolling when the menu is open
watch(
	() => isOpen.value,
	(newVal) => {
		if (newVal) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	},
)
</script>
<template>
  <div class="md:hidden">
    <Motionable
      v-motion
      as="div"
      name="menu"
      :show="isOpen"
      :initial="{ opacity: 0, y: 400, scale: 0.9 }"
      :enter="{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 300,
        },
      }"
      :leave="{
        opacity: 0,
        y: 400,
        scale: 0.9,
        transition: {
          duration: 300,
        },
      }"
      class="fixed inset-0 z-50 flex flex-col w-full h-full bg-gray-50 dark:bg-gray-800"
    >
      <div class="relative w-full px-6 pt-6 flex justify-between border-b dark:border-gray-700 items-start">
        <AppThemeToggle />
      </div>
      <div class="flex flex-col justify-center h-full px-6 space-y-4">
        <NavigationMobileMenuItem v-for="item in items" :key="item.name" :item="item" @close="toggle" />
      </div>
    </Motionable>

    <button
      :class="{
        'bg-primary': isOpen || !isOpen,
      }"
      class="fixed z-50 p-4 text-white transition duration-300 shadow-md md:hidden bottom-4 right-4 bg-primary hover:bg-opacity-75 rounded-button"
      @click="toggle"
    >
      <div>
        <span class="sr-only">Close</span>
        <Icon v-if="!isOpen" name="heroicons:bars-3" class="w-6 h-6" />
        <Icon v-if="isOpen" name="heroicons:x-mark" class="w-6 h-6" />
      </div>
    </button>
  </div>
</template>
