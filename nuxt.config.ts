// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    storage: {
      local: {
        driver: "fs",
        base: "./storage/local",
      },
    },
  },
});
