<template>
  <main class="min-h-screen">
    <div
      v-for="(repos, repo_id) in repo_list"
      :key="repo_id"
    >
      <AppHeader
        class="mb-8"
        :title="repos.title"
      />
      <div class="space-y-4 mb-8">
        <AppProjectCard
          v-for="(repo, id) in repos.repositories"
          :key="id"
          :project="repo"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Showcase | xithrius.cloud",
  description: "Showcase of projects and templates",
});

const { data: repo_list } = await useAsyncData("showcase-all", () =>
  queryContent("/showcase").find(),
);
</script>
