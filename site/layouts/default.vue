<script setup lang="ts"></script>
<template>
  <div
    class="relative flex flex-col min-h-screen overflow-hidden antialiased transition duration-150 bg-white visual-effects bg-gradient-to-br from-white to-gray-100 dark:from-gray-950 dark:to-gray-700"
  >
    <div class="relative w-full max-w-6xl px-6 pt-6 mx-auto lg:px-16">
      <NavigationTheHeader />
    </div>

    <div class="relative pt-8">
      <slot />
    </div>
  </div>
</template>
