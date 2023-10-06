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

<style>
/* Global colors - UNL Colors */
:root {
  --unl-scarlet: #d00000 !important;
  --unl-cream: #f5f1e7 !important;
  --unl-gray: #c7c8ca !important;
  --unl-lighter-cream: #fefdfa !important;
  --unl-navy: #001226 !important;
  --unl-cerulean: #249ab5 !important;
  --unl-green: #bccb2a !important;
  --unl-orange: #f58a1f !important;
  --unl-lapis: #005d84 !important;
  --unl-yellow: #ffd74f !important;
  --unl-purple: #a5228d !important;
  --navbar-height: 78px !important;
}

.bg-unl-scarlet {
  background-color: var(--unl-scarlet) !important;
}
.bg-unl-cream {
  background-color: var(--unl-cream) !important;
}
.bg-unl-gray {
  background-color: var(--unl-gray) !important;
}
.bg-unl-lighter-cream {
  background-color: var(--unl-lighter-cream) !important;
}
.bg-unl-navy {
  background-color: var(--unl-navy) !important;
}
.bg-unl-cerulean {
  background-color: var(--unl-cerulean) !important;
}
.bg-unl-green {
  background-color: var(--unl-green) !important;
}
.bg-unl-lapis {
  background-color: var(--unl-lapis) !important;
}
.bg-unl-yellow {
  background-color: var(--unl-yellow) !important;
}
.bg-unl-purple {
  background-color: var(--unl-purple) !important;
}

.navbar-padding {
  padding-top: var(--navbar-height); /* Default for desktop */
}
</style>
