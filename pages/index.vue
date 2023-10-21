<script setup>
import { useOrderStore } from '~/store/cart';
import restaurantData from '~/data/restaurantData.json';
// List of only open Restaurants
const openRestaurants = restaurantData.restaurants.filter((restaurant) => !restaurant.isClosed);
// List of only closed Restaurants
const closedRestaurants = restaurantData.restaurants.filter((restaurant) => restaurant.isClosed);
const cardOne = {
  restaurant: 'Restaurant Name',
  isClosed: false,
  image: 'subway-food.jpeg',
};
const cardTwo = {
  restaurant: 'Restaurant Name',
  isClosed: true,
  image: 'chick-fil-a-food.jpeg',
};
const order = useOrderStore()
</script>

<template>
  <div>

    <img src="~/assets/img/unl-pic-1.jpg" alt="Image of the University of Nebraska" class="img-fluid" />
      <span v-for="item in order.items" :key="item.id">
        <p>Order Placed</p>
        {{ item.name }}
        <img :src="'/restaurant-food/meal/' + item.image" alt="Image of food" />
        <br>
      </span>
    <div class="container-fluid px-5 pt-5">
      <div class="row">
        <div class="col bg-unl-cream rounded-4">
          <div class="row justify-content-between p-2 border border-2 rounded-4">
            <div class="col text-start">
              <h2 class="text-left">Open Now!</h2>
            </div>
            <div class="col text-end">
              <h2 class="bi bi-caret-up-fill"></h2>
            </div>
          </div>
          <!-- Test -->
          <!-- <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                  </li>
                </ul>
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav> -->
          <!-- Doing this on the client only so we can generate wait time randomly -->
          <ClientOnly>
            <CardGroup :restaurants="openRestaurants" />
          </ClientOnly>
        </div>
      </div>
    </div>
    <div class="container-fluid px-5 pt-5">
      <div class="row">
        <div class="col bg-unl-cream rounded-4">
          <div class="row justify-content-between p-2 border border-2 rounded-4">
            <div class="col text-start">
              <h2 class="text-left">Closed</h2>
            </div>
            <div class="col text-end">
              <button
                class="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#collapseCardGroup"
                aria-expanded="false"
                aria-controls="collapseCardGroup"
              >
                <span class="bi bi-caret-up-fill fs-3 text-center"></span>
              </button>
            </div>
          </div>
          <div class="collapse" id="collapseCardGroup">
            <ClientOnly>
              <CardGroup :restaurants="closedRestaurants" />
            </ClientOnly>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="row">
      <div class="col border">
        <h1 class="text-center">Dining To Go 2.0</h1>
        <p class="text-center">A new way to order food on campus</p>
      </div>
    </div> -->
  </div>
</template>

<style scoped>
.some-style {
  color: var(--unl-scarlet);
}
</style>
