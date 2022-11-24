<template>
  <div></div>
</template>

<script setup lang="ts">
import axios from "axios";
import { bookType } from "~~/components/types/bookType";

const book = reactive<bookType>({ title: "", description: "" });

axios.get("http://localhost:3000/api/v1/books/1").then((res) => {
  const bookData = res.data;
});
</script>
