<script setup lang="ts">
import { useToast } from "vue-toast-notification";
const $toast = useToast();
let instance = $toast.success("You did it!");

const showToast = () => {
  $toast.open("Howdy!");
};
</script>

<template>
  <div class="w-full min-h-screen">
    <button class="px-2 py-1 bg-green-300" @click="showToast">show</button>
    <Header />
    <div class="container grid w-full min-h-screen grid-cols-3 gap-2 mx-auto">
      <div class="col-span-1 my-auto transition duration-150 ease-out">
        <Form />
      </div>
      <div class="col-span-2">
        <Table />
      </div>
    </div>
  </div>
</template>
