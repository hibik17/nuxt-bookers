<script setup lang="ts">
import { usePostsStore } from "../../store/usePostsStore";
import { useBookStore } from "../../store/useBookStore";
const { posts } = usePostsStore();
const { newBook } = useBookStore();
</script>

<template>
  <div class="w-full min-h-screen">
    <Header />
    <div class="container grid w-full grid-cols-3 gap-2 mx-auto">
      <div class="col-span-1 my-auto transition duration-150 ease-out">
        <Form />
      </div>
      <div class="col-span-2">
        <table class="table-auto">
          <thead>
            <tr>
              <th>post name</th>
              <th>post body</th>
              <th>post email</th>
            </tr>
          </thead>
          <tbody v-for="post in posts">
            <tr :key="post.id">
              <td>{{ post.name }}</td>
              <td>{{ post.body }}</td>
              <td>{{ post.email }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
