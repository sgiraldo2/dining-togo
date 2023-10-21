<script setup>
import { useFavoriteStore } from '~/store/cart';
const f = useFavoriteStore()
console.log(f)
</script>

<template>
  <div>
    <div class="container mt-5">
      <h1 class="text-center mb-4">Favorite Orders Page</h1>
      <div class="text-center mb-4" v-if="Array.isArray(f.items) && f.items.length > 0">
        <div class="row">
          <div class="col-12 col-md-4" v-for="item in f.items" :key="item.id">
            <div class="card mb-3">
              <img :src="'/restaurant-food/meal/' + item.image" class="card-img-top" alt="Image of food" />
              <div class="card-body">
                <h5 class="card-title">{{ item.name }}</h5>
                <p class="card-text">Price: ${{ item.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="text-center" v-else>
        No past orders available.
      </p>
    </div>
  </div>
</template>
