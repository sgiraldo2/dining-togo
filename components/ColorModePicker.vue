<template>
  <div>
    <!-- <h1>Color mode: {{ colorMode.value }}</h1> -->
    <div class="dropdown">
      <button
        class="btn btn-secondary"
        type="button"
        id="colorModeDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <!-- {{ colorMode.preference }} -->
        <div v-if="colorMode.preference === 'light'" class="bi-sun-fill"></div>
        <div v-if="colorMode.preference === 'dark'" class="bi-moon-fill"></div>
        <div v-if="colorMode.preference === 'system'" class="bi-magic"></div>
      </button>
      <ul
        class="dropdown-menu"
        aria-labelledby="colorModeDropdown"
        style="min-width: 0%"
      >
        <li>
          <a
            class="dropdown-item bi-magic"
            href="#"
            @click="setColorMode('system')"
            title="Match System"
          ></a>
        </li>
        <li>
          <a
            class="dropdown-item bi-sun-fill"
            href="#"
            @click="setColorMode('light')"
            title="Light Mode"
          ></a>
        </li>
        <li>
          <a
            class="dropdown-item bi-moon-fill"
            href="#"
            @click="setColorMode('dark')"
            title="Dark Mode"
          ></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode();


// function setColorMode(mode) {
//   colorMode.preference = mode;
// }
</script>
