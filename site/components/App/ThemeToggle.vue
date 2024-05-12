<script setup lang="ts">
const colorMode = useColorMode();

const onClick = () => {
  const values = ["system", "light", "dark"];
  const index = values.indexOf(colorMode.preference);
  const next = (index + 1) % values.length;

  colorMode.preference = values[next];
};
</script>

<template>
  <button
    aria-label="Color Mode"
    @click="onClick"
    class="absolute px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400"
  >
    <ColorScheme placeholder="...">
      <Icon v-if="colorMode.preference === 'dark'" name="uil:moon" />
      <Icon v-else-if="colorMode.preference === 'light'" name="uil:sun" />
      <Icon v-else name="uil:desktop" />
    </ColorScheme>
  </button>
</template>
