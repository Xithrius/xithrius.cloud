<template>
  <main class="min-h-screen">
    <AppHeader
      class="mb-16"
      title="ToDo"
    />
    <div class="space-y-4">
      <AppToDoTable
        v-for="(todo, id) in todos"
        :key="id"
        :todo="todo.todo"
      />
    </div>
  </main>
</template>

<script setup>
useSeoMeta({
  title: 'ToDo | Xithrius',
  description: 'Tasks and Goals for the future',
})

const { data: todos } = await useAsyncData('todo-all', () =>
  queryContent('/todo').sort({title: -1}).find()
)
</script>
