<script setup>
import { useCartStore } from '~/store/cart';
import { useFavoriteStore } from '~/store/cart';
const { meals } = defineProps(['meals']);

const cart = useCartStore();
const favoriteItems = useFavoriteStore();

const selectedCustomizations = ref({});

const addToCart = (meal) => {
  const item = {
    id: meal.name, // Assume the meal name is unique; otherwise, use a proper unique ID
    name: meal.name,
    price: meal.price,
    image: meal.image,
    quantity: 1,
    customizations: meal.customizations,
  };
  cart.addItem(item);
};

const addFavorite = (meal) => {
  const item = {
    id: meal.name, // Assume the meal name is unique; otherwise, use a proper unique ID
    name: meal.name,
    price: meal.price,
    image: meal.image,
    quantity: 1,
    customizations: meal.customizations,
  };
  favoriteItems.addItem(item);
};

const isItemInCart = (id) => {
  return cart.items.some((item) => item.id === id);
};

const isItemInFavorites = (id) => {
  return favoriteItems.items.some((item) => item.id === id);
};
</script>

<template>
  <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4 p-4">
    <div class="col" v-for="meal in meals" :key="meal.name">
      <div class="card h-100 text-decoration-none position-relative">
        <img :src="`/restaurant-food/meal` + meal.image" class="card-img-top" alt="UNL Meal" />
        <div class="card-body">
          meal.route: {{ meal.route }}
          <h3 class="card-title">{{ meal.name }}</h3>
          <p>{{ meal.price }}</p>
          <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            <button @click="addToCart(meal)" class="btn btn-primary">Add to cart!</button>
          </a>
          <!-- Star icon for favorite -->
          <button @click="addFavorite(meal)" class="btn btn-link position-absolute top-0 end-0 hover-button">
            <i v-if="!isItemInFavorites(meal.name)" class="bi bi-star-fill text-secondary"></i>
            <i v-else class="bi bi-star-fill"></i>
            <!-- isItemInFavorites(meal.name) -->
          </button>
        </div>
      </div>
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
