<template>
  <div>
    <form class="w-full max-w-sm">
      <div class="flex items-center py-2 border-b border-teal-500">
        <input
          class="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
          type="text"
          placeholder="title"
          aria-label="Full name"
          v-model="newBook.title"
        />
      </div>
      <div class="items-center py-2 border-b border-teal-500">
        <input
          class="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
          type="text"
          placeholder="description"
          aria-label="Full name"
          v-model="newBook.body"
        />
      </div>
      <div class="flex items-center py-2 border-b border-teal-500">
        <input
          type="password"
          placeholder="www.amazon.com"
          class="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
        />
      </div>
      <div class="mt-2 text-center">
        <button
          @click.prevent="addBook"
          class="px-4 py-2 font-semibold bg-transparent border border-teal-200 rounded-md text-sky-300"
        >
          Add
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useBookStore } from "~~/store/useBookStore";
const { addBook, newBook } = useBookStore();
</script>
