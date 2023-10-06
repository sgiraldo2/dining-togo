<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-blur">
    <div class="container-fluid d-flex justify-content-between">
      <!-- Logo on the left -->
      <a class="navbar-brand" href="#">
        <!-- <img
          src="~/assets/logo/SG_Logo.png"
          alt=""
          width="30"
          height="24"
          class="d-inline-block align-text-top"
          draggable="false"
        /> -->
        Dining To Go 2.0
      </a>

      <!-- Links in the center -->
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mx-auto">
          <!-- mx-auto centers the links -->
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/about">About</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/restaurants">Restaurants</NuxtLink>
          </li>
        </ul>
      </div>

      <!-- ColorModePicker and icon on the right -->
      <div class="d-flex align-items-center">
        <ColorModePicker />
        <div class="bi-person-circle ms-3"></div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-blur {
  backdrop-filter: contrast(75%) blur(10px);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.15);
}
</style>
