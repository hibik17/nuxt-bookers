<template>
  <div>
    <form class="w-full max-w-sm">
      <div class="flex items-center py-2 border-b border-teal-500">
        <input
          class="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
          type="text"
          placeholder="Jane Doe"
          aria-label="Full name"
        />
        <button
          class="flex-shrink-0 px-2 py-1 text-sm text-white bg-teal-500 border-4 border-teal-500 rounded hover:bg-teal-700 hover:border-teal-700"
          type="button"
        >
          Sign Up
        </button>
        <button
          class="flex-shrink-0 px-2 py-1 text-sm text-teal-500 border-4 border-transparent rounded hover:text-teal-800"
          type="button"
        >
          Cancel
        </button>
      </div>
      <div class="flex items-center py-2 border-b border-teal-500">
        <input
          type="week"
          placeholder="www.amazon.com"
          class="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
        />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts"></script>
