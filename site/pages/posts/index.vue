<template>
  <main class="min-h-screen">
    <AppHeader class="mb-16" title="Blog" :description="description" />
    <ul class="space-y-2">
      <li v-for="(post, id) in posts" :key="id">
        <AppPostCard :article="post" />
      </li>
    </ul>
  </main>
</template>

<script setup>
useSeoMeta({
  title: 'Blog posts | xithrius.cloud',
  description: 'Blog posts, guides, and fixes',
})

const { data: posts } = await useAsyncData('all-posts', () =>
  queryContent('/posts').sort({ date: -1 }).find()
)
</script>
