<template>
  <main class="min-h-screen">
    <AppHeader
      class="mb-12"
      title="Projects & Templates"
      :description="description"
    />
    <div class="space-y-4">
      <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
  </main>
</template>

<script setup>
useSeoMeta({
  title: "Projects & Templates | Xithrius",
  description: "Projects showcase and templates for repositories",
});

const { data: projects } = await useAsyncData("projects-all", () =>
  queryContent("/projects").find()
);
</script>
