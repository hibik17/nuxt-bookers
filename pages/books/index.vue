<script setup lang="ts"></script>

<template>
  <div class="w-full min-h-screen">
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
