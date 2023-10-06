<script setup>
useSeoMeta({
  title: 'Dining To Go 2.0',
  description:
    'EnterDescHere',
  ogTitle: 'Dining To Go 2.0',
  ogDescription:
    'EnterDescHere',
  // ogImage: '/todo.jpg',
  // ogUrl: '',
  twitterTitle: 'Dining To Go 2.0',
  twitterDescription:
    'EnterDescHere',
  // twitterImage: '/todo.jpg',
  twitterCard: 'summary_large_image',
});

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico',
    },
  ],
});
</script>

<template>
  <div>
    <Navbar />
    <div class="navbar-padding">
      <NuxtPage />
    </div>
  </div>
</template>

<style scoped>
.navbar-padding {
  padding-top: 78px; /* Default for desktop */
}
</style>
