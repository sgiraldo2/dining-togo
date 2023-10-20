<script setup>
import { useCartStore } from '~/store/cart';

const cart = useCartStore();

const removeItem = (id) => {
  cart.removeItem(id);
};

const clearCart = () => {
  cart.removeAllItems();
  // TODO: Create a state to track the cart being checked out
};
</script>

<template>
  <!-- <a
    class="btn btn-primary"
    data-bs-toggle="offcanvas"
    href="#offcanvasExample"
    role="button"
    aria-controls="offcanvasExample"
  >
    Link with href
  </a> -->
  <!-- <button
    class="btn btn-primary"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasExample"
    aria-controls="offcanvasExample"
  >
    Button with data-bs-target
  </button> -->

  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">Cart</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div v-if="cart.items.length > 0">
        <div v-for="item in cart.items" :key="item.id">
          <div class="card mb-3" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-4">
                <img :src="`/restaurant-food/meal` + item.image" class="card-img-top" alt="UNL Meal" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ item.name }}</h5>
                  <p class="card-text">
                    ${{ item.price }}
                  </p>
                  <span>Quantity: {{ item.quantity }}</span>
                </div>
                <button @click="removeItem(item.id)">Remove</button>
              </div>
            </div>
          </div>
        </div>
        <div>Total Price: ${{ cart.totalPrice }}</div>
        <!-- TODO: Truncate or round up to only show 2 decimals -->
        <button v-if="cart.items.length > 0" @click="clearCart">Check Out!</button>
        <!-- TODO: Display checkout notification  from checked out state -->
      </div>
      <div v-else>Your cart is empty</div>

      <!-- <div class="dropdown mt-3">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
          Dropdown button
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div> -->
    </div>
  </div>
</template>
