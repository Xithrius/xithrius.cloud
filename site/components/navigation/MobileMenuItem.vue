<script setup lang="ts">
const subMenuOpen = ref(false)

defineProps({
	item: {
		type: Object,
		required: true,
	},
})

defineEmits(['close'])
</script>
<template>
  <button class="flex items-center rounded-md" @click="subMenuOpen = !subMenuOpen">
    <span class="text-2xl mr-2 font-medium dark:text-white font-display">
      {{ item.title }}
    </span>
    <Icon name="heroicons:plus" class="w-6 h-6 text-primary" />
  </button>
  <Motionable
    v-motion
    as="div"
    name="submenu"
    :show="subMenuOpen"
    :initial="{ opacity: 0, x: 400, scale: 0.9 }"
    :enter="{
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 300,
      },
    }"
    :leave="{
      opacity: 0,
      x: 400,
      scale: 0.9,
      transition: {
        duration: 300,
      },
    }"
    class="fixed inset-0 z-50 flex flex-col items-center justify-center w-full h-full bg-gray-50 dark:bg-gray-800"
  >
    <div class="w-full px-6">
      <TypographyTitle class="pb-2 border-b border-b-primary">
        {{ item.name }}
      </TypographyTitle>
      <NuxtLink :key="item.name" :href="item.path" class="px-3 dark:text-white">
        <VText size="2xl" class="font-medium font-display">
          {{ item.name }}
        </VText>
        <VText text-color="light">
          {{ item.name }}
        </VText>
      </NuxtLink>
    </div>
    <div class="absolute bottom-4 left-4">
      <UButton icon="material-symbols:arrow-back-rounded" label="Back" size="xl" @click="subMenuOpen = false" />
    </div>
  </Motionable>
</template>
