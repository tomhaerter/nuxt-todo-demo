<script lang="ts" setup>
import { ref } from "vue";

const { data: todos, refresh } = await useFetch("/api/todos");

const newTodo = ref("");

async function addTodo() {
  await $fetch("/api/todos", {
    method: "POST",
    body: JSON.stringify({ text: newTodo.value }),
  });
  await refresh();
}

async function removeTodo(id: number) {
  await $fetch(`/api/todos/${id}`, { method: "DELETE" });
  await refresh();
}
</script>

<template>
  <div>
    <h1>To Do's</h1>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="newTodo" placeholder="Add a new todo" />
      <button type="submit">Add</button>
    </form>

    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
        <button @click="removeTodo(todo.id)">Remove</button>
      </li>
    </ul>
  </div>
</template>
