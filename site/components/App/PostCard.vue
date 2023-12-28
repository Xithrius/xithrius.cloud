<template>
  <NuxtLink :to="article._path" class="group">
    <article>
      <div class="p-1 pl-4">
        <div class="flex flex-row">
          <div class="opacity-50">
            {{ getReadableDate(article.date) }}
          </div>
          <h3 class="mx-2 underline-offset-2 transition hover:underline">
            {{ article.title }}
          </h3>
        </div>
      </div>
    </article>
  </NuxtLink>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
});

const getReadableDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  });
};
</script>
