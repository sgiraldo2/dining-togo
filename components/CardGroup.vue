<script setup>
const { restaurant, isClosed, image } = defineProps(['restaurant', 'isClosed', 'image']);
const cards = 5;
</script>

<template>
  <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4 p-4">
    <div class="col" v-for="card in cards">
      <div class="card h-100" :class="{ 'closed-overlay': isClosed }">
        <img :src="`restaurant-food/` + image" class="card-img-top" alt="UNL Meal" />
        <div class="card-body">
          <h2 class="card-title">{{ restaurant }}</h2>
          <p class="card-text fs-5 text-end" v-if="!isClosed">{{ Math.floor(Math.random() * 30) }} minute wait</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.closed-overlay {
  filter: brightness(75%) grayscale(100%);
}
</style>
