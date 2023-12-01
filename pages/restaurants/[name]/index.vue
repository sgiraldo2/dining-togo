<script setup>
const route = useRoute();
const fullPath = route.path;
const starbucksData = ref(null);

import restaurantData from '~/data/restaurantData.json';
// only want the restaurant that matches the route name
const restaurant = restaurantData.restaurants.filter((restaurant) => restaurant.route === fullPath)[0];
// if (fullPath === '/restaurants/starbucks') {
//   const { data: starbucksMenu } = await useFetch(
//     'https://www.starbucks.com/bff/ordering/menu'
//   );
//   starbucksData.value = starbucksMenu.value;
// }

// QDOBA URL
// https://order.qdoba.com/restaurants/80013/

// chick-fil-a URL
// https://order.api.my.chick-fil-a.com/orders/locations/3.2/04257/menu/client/individual

// Subway URL
// https://order.subway.com/api/menu?language=en&restaurantId=1

// Task 1
</script>

<template>
  <div>
    <div class="container">
      <div v-if="restaurant">
        <h1 class="text-center">{{ restaurant.name }}</h1>
        <div class="text-center">
          <img
            :src="`/restaurant-logo/` + restaurant.logo"
            class="card-img-top"
            alt="Restaurant Logo"
            style="height: 200px; width: auto"
          />
        </div>
        <div v-if="starbucksData">
          <AccordionStarbucks :starbucksData="starbucksData" />
        </div>
        <div v-else>
          <MealCardGroup :meals="restaurant.meals" />
        </div>
      </div>
      <div v-else>
        <h1 class="text-center">Restaurant: {{ route.params.name }}</h1>
        <h1 class="text-center">was not found</h1>
        <p class="text-center">Please check the URL and try again.</p>
      </div>
    </div>
  </div>
</template>
