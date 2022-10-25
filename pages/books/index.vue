<script setup lang="ts">
import { usePostsStore } from "../../store/usePostsStore";
const { posts } = usePostsStore();
</script>

<template>
  <div class="w-full min-h-screen">
    <Header />
    <div class="w-full mx-5 animate animate-pulse">
      <table class="mt-10 table-auto bg-slate-200">
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
</template>
