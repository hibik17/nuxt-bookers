<script setup lang="ts">
import { usePostsStore } from "../../store/usePostsStore";
const { data, posts } = usePostsStore();
</script>

<template>
  <div>
    <Header />
    <div>this is books index vue</div>
    <div>{{ `${data} is the message from store` }}</div>
    <table>
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
