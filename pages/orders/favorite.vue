<script setup>
const { meals } = defineProps(['meals']);
import { useFavoriteStore } from '~/store/cart';
import { useCartStore } from '~/store/cart'

const cart = useCartStore()
const favoriteItems = useFavoriteStore()

const addToCart = (meal) => {
  const item = {
    id: meal.name,  // Assume the meal name is unique; otherwise, use a proper unique ID
    name: meal.name,
    price: meal.price,
    image: meal.image,
    quantity: 1,
    //customizations: selectedCustomizations.value
  }
  cart.addItem(item)
}
</script>

<template>
  <div>
    <div class="container mt-5">
      <h1 class="text-center mb-4">Favorite Orders Page</h1>
      <div class="text-center mb-4" v-if="Array.isArray(favoriteItems.items) && favoriteItems.items.length > 0">
        <div class="row">
          <div class="col-12 col-md-4" v-for="item in favoriteItems.items" :key="item.id">
            <div class="card mb-3">
              <!-- Turn the image into a button -->
              <button class="hover-button" @click="addToCart(item)">
                <img :src="'/restaurant-food/meal/' + item.image" class="card-img-top" alt="Image of food" />
              <div class="card-body">
                <h5 class="card-title">{{ item.name }}</h5>
                <p class="card-text">Price: ${{ item.price }}</p>
              </div>
              </button>
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

<style scoped>
.hover-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.hover-button:hover {
  background-color: green;
}
</style>