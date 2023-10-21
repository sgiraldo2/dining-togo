<script setup>
const route = useRoute();
const fullPath = route.path;
const starbucksData = ref(null);

import restaurantData from '~/data/restaurantData.json';
// only want the restaurant that matches the route name
const restaurant = restaurantData.restaurants.filter((restaurant) => restaurant.route === fullPath)[0];
if (fullPath === '/restaurants/starbucks') {
  const { data: starbucksMenu } = await useFetch(
    'https://www.starbucks.com/bff/ordering/menu'
  );
  starbucksData.value = starbucksMenu.value;
}

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
        <!-- <h1 class="text-center">{{ restaurant.name }}</h1> -->
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
          <!-- <div v-for="meal in restaurant.meals">
            <p>{{ meal.name }}</p>
            <p>{{ meal.price }}</p>
            <div v-for="customization in meal.customizations">
              <p>{{ customization.name }}</p>
            </div>
            <p> end </p>
          </div> -->
        </div>
        <!-- for meal in restaurant.meals -->
        <!-- <div class="row">
          <div class="col bg-unl-cream rounded-4">
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4 p-4">
              <div class="col" v-for="meal in restaurant.meals" key="meal.name">
                <NuxtLink :to="meal.route" class="card h-100 text-decoration-none">
                  <img :src="`restaurant-food/meal/` + meal.image" class="card-img-top" alt="UNL Meal" />
                  <div class="card-body">
                    <h3 class="card-title">{{ meal.name }}</h3>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div> -->

        <!-- <p class="text-center">{{ restaurant }}</p> -->
      </div>
      <div v-else>
        <h1 class="text-center">Restaurant: {{ route.params.name }}</h1>
        <h1 class="text-center">was not found</h1>
        <p class="text-center">Please check the URL and try again.</p>
      </div>
    </div>
  </div>
</template>
