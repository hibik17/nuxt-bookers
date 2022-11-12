<template>
  <div class="w-screen calc(h-screen - 100px)">
    <Header />
    <div class="flex items-center justify-center pt-[200px]">
      <div>
        <div class="text-3xl font-bold text-center text-gray-600">
          welocome to bookers!
        </div>
        <div class="mt-10 font-serif text-xl text-center text-gray-600">
          you can post your comment of the book that your read
          <br />
          <NuxtLink
            to="/books"
            class="pt-[30px] font-semibold text-gray-800 animate-ping duration-500"
          >
            ようこそbookers(Nuxt版)へ
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
