<template>
  <table class="w-full mt-3 text-center table-fixed">
    <thead>
      <tr>
        <th>title</th>
        <th>description</th>
        <th></th>
      </tr>
    </thead>
    <tbody v-for="(book, index) in books">
      <tr :key="index">
        <td>{{ book.title }}</td>
        <td>{{ book.body }}</td>
        <th>
          <button
            @click="deleteBook(index)"
            class="px-2 py-1 font-mono text-white bg-red-500 rounded-md hover:bg-red-600 hover:text-gray-200"
          >
            delete
          </button>
          <button @click="editClick">edit</button>
        </th>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { useBookStore } from "../store/useBookStore";
const { books, deleteBook } = useBookStore();

const editClick = () => {
  alert("edit button was pressed check it out");
};
</script>
