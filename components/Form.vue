<template>
  <div>
    <form class="w-full max-w-sm">
      <div class="flex items-center py-2 border-b border-teal-500">
        <input
          class="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
          type="text"
          placeholder="title"
          aria-label="Full name"
        />
      </div>
      <div class="items-center py-2 border-b border-teal-500">
        <input
          class="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
          type="text"
          placeholder="description"
          aria-label="Full name"
        />
      </div>
      <div class="flex items-center py-2 border-b border-teal-500">
        <input
          type="week"
          placeholder="www.amazon.com"
          class="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
        />
      </div>
      <div class="w-full h-auto mx-auto">
        <button
          @click="addBook"
          class="w-8 h-auto text-gray-200 bg-green-300 rounded-md btn"
        >
          Add
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useBookStore } from "~~/store/useBookStore";
const { addBook } = useBookStore();
</script>
