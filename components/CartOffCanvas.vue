<script setup>
import emailjs from '@emailjs/browser';
import { useCartStore } from '~/store/cart';
import { useOrderStore } from '~/store/cart';


const cart = useCartStore();
const order = useOrderStore()

const removeItem = (id) => {
  cart.removeItem(id);
};

const increaseItemQuantity = (id) => {
  cart.increaseItemQuantity(id);
};

const decreaseItemQuantity = (id) => {
  cart.decreaseItemQuantity(id);
};

const serviceID = 'service_z8rqm0k';
const templateID = 'template_m5pi14s';
const userID = '9OlUggknYeKYAXBQI';

const emailParams = {
  name: "Husker Herbie",
  email: "Husker.Herbie@huskers.com",
  message: "Husker just placed an order of:" + order.items,
}

const sendEmail = () => {
  emailjs.send(serviceID, templateID, emailParams, userID)
    .then((result) => {
      console.log('Message Sent!');
    })
    .catch((error) => {
      console.log('Message Failed');
    });
};

const checkOut = () => {
  order.items = cart.items
  sendEmail(serviceID, templateID, userID);
  cart.removeAllItems();
  // TODO: Create a state to track the cart being checked out
};

const customizeMenu = (id) => {
};
// console.log("items", cart.items);
</script>

<template>
  <CustomizeModal />
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
                  <p class="card-text">${{ item.price }}</p>
                  <span>Quantity: {{ item.quantity }}</span>
                  <!-- TODO: Style these better -->
                  <button @click="decreaseItemQuantity(item.id)">-</button>
                  <button @click="increaseItemQuantity(item.id)">+</button>
                  <!-- <span>Custom: {{ item.customizations }}</span> -->
                </div>
                <button @click="customizeMenu(item.id)" data-bs-toggle="modal" data-bs-target="#customize" class="btn btn-success btn-sm me-2">Customize</button>
                <button @click="removeItem(item.id)" class="btn btn-danger btn-sm">Remove</button>
              </div>
            </div>
          </div>
        </div>
      <div>Total Price: ${{ cart.totalPrice.toFixed(2) }}</div>
        <!-- TODO: Truncate or round up to only show 2 decimals -->
        <button type="button" class="btn btn-primary" v-if="cart.items.length > 0" @click="checkOut" data-bs-toggle="modal" data-bs-target="#checkedOut">Check Out!</button>
        <!-- TODO: Display checkout notification  from checked out state -->
      </div>
      <div v-else>Your cart is empty</div>
    </div>
  </div>
</template>
