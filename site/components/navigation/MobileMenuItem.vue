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
    <NuxtLink :href="item.path" class="flex flex-row">
      <div class="pt-5">
        <Icon :name="item.icon" class="w-6 h-6 text-primary" />
      </div>
      <span class="text-2xl font-medium dark:text-white m-4">
        {{ item.name }}
      </span>
    </NuxtLink>
  </button>
</template>
