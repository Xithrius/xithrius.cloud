<script setup>
defineProps({
  todo: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="pb-6">
    <div class="text-2xl pb-2 underline">
      {{ todo.title }}
    </div>
    <table class="task-table">
      <thead>
        <tr>
          <th>Status</th>

          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in todo" :key="item.desc">
          <td>
            <Icon v-if="item.done" name="heroicons:check" class="w-6 h-6" />
          </td>
          <td>
            <a v-if="item.url" :href="item.url" target="_blank" class="underline text-blue-400">{{ item.desc }}</a>
            <span v-else>{{ item.desc }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.task-table {
  width: 100%;
  border-collapse: collapse;
}

.dark .task-table thead tr {
  border-bottom: 2px solid #ccc;
}

.dark .task-table tbody tr {
  border-bottom: 1px solid #464646;
}

.task-table thead tr {
  border-bottom: 2px solid #333;
}

.task-table tbody tr {
  border-bottom: 1px solid #ccc;
}
</style>
