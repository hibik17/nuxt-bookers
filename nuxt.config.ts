// nuxt.config.js
export default defineNuxtConfig({
  // ... other options
  buildModules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/tailwind.css"],
  modules: [
    // ...
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // automatically imports `defineStore`
          "defineStore", // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
    [],
  ],
});
