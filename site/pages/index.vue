<template>
  <main
    class="my-24 flex flex-1 flex-col items-center justify-center text-center font-['JetBrains_Mono']"
  >
    <div class="space-y-24">
      <div class="text-[10vw]">
        <HomeIntro />
      </div>
    </div>
    <CommandPalette />
  </main>
</template>

<script setup>
import CommandPalette from '~/components/navigation/CommandPalette.vue'

useSeoMeta({
  title: 'xithrius.cloud',
})
</script>
