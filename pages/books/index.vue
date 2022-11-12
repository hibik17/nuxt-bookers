<script setup lang="ts">
// import { usePostsStore } from "../../store/usePostsStore";
import { useBookStore } from "../../store/useBookStore";
// const { posts } = usePostsStore();
const { books } = useBookStore();
</script>

<template>
  <div class="w-full min-h-screen">
    <Header />
    <div class="container grid w-full min-h-screen grid-cols-3 gap-2 mx-auto">
      <div class="col-span-1 my-auto transition duration-150 ease-out">
        <Form />
      </div>
      <div class="col-span-2">
        <table class="table-auto">
          <thead>
            <tr>
              <th>title</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody v-for="(book, index) in books">
            <tr :key="index">
              <td>{{ book.title }}</td>
              <td>{{ book.body }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
