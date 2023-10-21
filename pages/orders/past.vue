<script setup>
import { useOrderStore } from '~/store/cart';
const order = useOrderStore()
console.log(order.items)
</script>

<template>
  <div>
    <div class="container">
      <h1 class="text-center">Past Orders Page</h1>
      <p class="text-center">View past orders here.</p>
      <p v-if="Array.isArray(order.items) && order.items.length > 0">
      <span v-for="item in order.items" :key="item.id">
        {{ item.name }}
        <img :src="'/restaurant-food/meal/' + item.image" alt="Image of food" />
        <br>
      </span>
    </p>
    </div>
  </div>
</template>
