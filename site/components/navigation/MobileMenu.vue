<script setup lang="ts">
import type { NavigationItem } from "~/types/navigation";

const items: NavigationItem[] = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Blog",
    to: "/posts",
  },
  {
    label: "Showcase",
    to: "/showcase",
  },
  {
    label: "ToDo",
    to: "/todo",
  },
];

const route = useRoute();

const isOpen = ref(false);
const subMenuOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
  subMenuOpen.value = false;
};

watch(
  () => route.path,
  () => {
    isOpen.value = false;
  },
);

watch(
  () => isOpen.value,
  (newVal) => {
    if (newVal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  },
);
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
        x: 0,
        scale: 1,
        transition: {
          duration: 150,
        },
      }"
      :leave="{
        opacity: 0,
        y: 0,
        x: -400,
        scale: 1,
        transition: {
          duration: 150,
        },
      }"
      class="fixed inset-0 z-50 flex flex-col w-full h-full bg-white dark:bg-zinc-800"
    >
      <div class="relative w-full px-6 pt-6 flex justify-between border-b dark:border-gray-700 items-start">
        <AppThemeToggle />
      </div>
      <div class="flex flex-col justify-center h-full px-6 space-y-12">
        <UVerticalNavigation
          :links="items"
          :ui="{
            wrapper: 'border-s border-gray-200 dark:border-gray-800 space-y-2',
            base: 'group block border-s -ms-px lg:leading-4 before:hidden',
            padding: 'p-6 ps-4',
            rounded: '',
            font: '',
            ring: '',
            size: 'text-2xl',
            active: 'text-primary-500 dark:text-primary-400 border-current font-semibold',
            inactive: 'border-transparent hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300'
          }"
        />
      </div>
    </Motionable>

    <button
      :class="{
        'bg-primary': isOpen || !isOpen,
      }"
      class="fixed z-50 p-4 text-white transition duration-300 shadow-md md:hidden bottom-4 right-4 bg-primary hover:bg-opacity-75 rounded-lg"
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
