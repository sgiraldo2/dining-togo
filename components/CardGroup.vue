<script setup>
const { restaurants } = defineProps(['restaurants']);
</script>

<template>
  <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4 p-4">
    <div class="col" v-for="restaurant in restaurants" key="restaurant.name">
      <NuxtLink :to="restaurant.route" class="card h-100 text-decoration-none" :class="{ 'closed-overlay': restaurant.isClosed }">
        <img :src="`restaurant-food/` + restaurant.image" class="card-img-top" alt="UNL Meal" />
        <div class="card-body">
          <h2 class="card-title">{{ restaurant.name }}</h2>
          <p class="card-text fs-5 text-end" v-if="!restaurant.isClosed">
            {{ restaurant.isClosed ? '' : 5 + Math.floor(Math.random() * 25) }} minute wait
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.closed-overlay {
  filter: brightness(75%) grayscale(100%);
}
</style>
