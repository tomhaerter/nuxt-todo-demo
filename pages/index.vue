<script lang="ts" setup>
import { ref } from "vue";

const { data: todos, refresh } = await useFetch("/api/todos");

const newTodo = ref("");

async function addTodo() {
  await $fetch("/api/todos", {
    method: "POST",
    body: { text: newTodo.value },
  });
  newTodo.value = "";
  await refresh();
}

async function removeTodo(id: number) {
  await $fetch(`/api/todos/${id}`, { method: "DELETE" });
  await refresh();
}
</script>

<template>
  <div class="dark:bg-neutral-950 h-screen">
    <div class="p-12 max-w-screen-xl mx-auto">
      <h1 class="mb-3 text-2xl font-medium dark:text-neutral-50">To Do's</h1>
      <form @submit.prevent="addTodo" class="flex gap-2 mb-4">
        <input
          type="text"
          v-model="newTodo"
          placeholder="Add a new todo"
          class="px-2 py-1.5 min-w-96 rounded-md text-sm bg-neutral-100 border border-neutral-300 text-black placeholder:text-neutral-400 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-50 dark:placeholder-text-neutral-400"
        />
        <button
          type="submit"
          class="px-4 text-sm py-1.5 rounded-md bg-neutral-950 text-white dark:bg-neutral-800 dark:text-neutral-50 hover:bg-neutral-700 hover:text-white transition-colors"
        >
          Add
        </button>
      </form>

      <ul class="list-disc pl-4 dark:text-neutral-50">
        <li v-for="todo in todos" :key="todo.id" class="mb-2">
          <span class="mr-2 dark:text-neutral-50">{{ todo.text }}</span>
          <button @click="removeTodo(todo.id)" class="text-sm text-red-700 hover:text-red-500">Remove</button>
        </li>
      </ul>
    </div>
  </div>
</template>
