<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg fixed-top border-bottom border-4 navbar-style bg-unl-lighter-cream">
    <div class="container-fluid d-flex justify-content-between px-5">
      <!-- Logo on the left -->
      <NuxtLink to="/" class="navbar-brand fs-2"> Dining To Go 2.0 </NuxtLink>
      <!-- <a class="navbar-brand" href="/">
        <img
          src="~/assets/logo/SG_Logo.png"
          alt=""
          width="30"
          height="24"
          class="d-inline-block align-text-top"
          draggable="false"
          />
      </a> -->
      <!-- ColorModePicker and icon on the right -->
      <div class="d-flex align-items-center">
        <!-- <ColorModePicker /> -->
        <NuxtLink to="/orders/past" class="navbar-brand px-3 bi bi-clock-history fs-2"></NuxtLink>
        <NuxtLink to="/orders/favorite" class="navbar-brand px-3 bi bi-heart-fill fs-2"></NuxtLink>
        <NuxtLink to="/profile" class="navbar-brand px-3 bi bi-person-fill fs-2"></NuxtLink>
        <NuxtLink to="/cart" class="navbar-brand px-3 bi bi-cart-fill fs-2"></NuxtLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-style {
  min-height: var(--navbar-height) !important;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.15);
  border-color: var(--unl-scarlet) !important;
}
</style>
