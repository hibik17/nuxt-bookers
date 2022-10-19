<script setup lang="ts">
import { usePostsStore } from "../../store/usePostsStore";
const { data, posts } = usePostsStore();
</script>

<template>
  <div>
    <div>this is books index vue</div>
    <div>{{ `${data} is the message from store` }}</div>
    <div>{{ posts }}</div>
  </div>
</template>
