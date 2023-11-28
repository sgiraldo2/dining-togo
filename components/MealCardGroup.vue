<script setup>
import { useCartStore } from '~/store/cart'
import { useFavoriteStore } from '~/store/cart'
const { meals } = defineProps(['meals']);

const cart = useCartStore()
const favoriteItems = useFavoriteStore()

const selectedCustomizations = ref({}) 

const addToCart = (meal) => {
  const item = {
    id: meal.name,  // Assume the meal name is unique; otherwise, use a proper unique ID
    name: meal.name,
    price: meal.price,
    image: meal.image,
    quantity: 1,
    customizations: meal.customizations
  }
  cart.addItem(item)
}

const addFavorite = (meal) => {
  const item = {
    id: meal.name,  // Assume the meal name is unique; otherwise, use a proper unique ID
    name: meal.name,
    price: meal.price,
    image: meal.image,
    quantity: 1,
    customizations: selectedCustomizations.value
  }
  favoriteItems.addItem(item)
}

</script>

<template>
  <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4 p-4">
    <div class="col" v-for="meal in meals" :key="meal.name">
      <NuxtLink :to="meal.route" class="card h-100 text-decoration-none position-relative">
        <img :src="`/restaurant-food/meal` + meal.image" class="card-img-top" alt="UNL Meal" />
        <div class="card-body">
          <h3 class="card-title">{{ meal.name }}</h3>
          <p>{{ meal.price }}</p>
          <button @click="addToCart(meal)" class="btn btn-primary">Add to cart!</button>
          <!-- Star icon for favorite -->
          <button @click="addFavorite(meal)" class="btn btn-link position-absolute top-0 end-0 hover-button" style="color: yellow;">
            <i class="bi bi-star-fill"></i>
          </button>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.closed-overlay {
  filter: brightness(75%) grayscale(100%);
}
.btn-link.position-absolute.top-0.end-0 {
  margin: 10px;
  color: orange !important;
}
.hover-button:hover i {
  color: green;
}
.star-clicked i {
  color: green;
}
</style>
