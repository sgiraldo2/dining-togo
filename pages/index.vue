<script setup>
const cardOne = {
  restaurant: 'Restaurant Name',
  isClosed: false,
  image: 'subway-food.jpeg',
}
const cardTwo = {
  restaurant: 'Restaurant Name',
  isClosed: true,
  image: 'chick-fil-a-food.jpeg',
}
</script>

<template>
  <div>
    <img src="~/assets/img/unl-pic-1.jpg" alt="Image of the University of Nebraska" class="img-fluid" />
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
          <CardGroup 
          :isClosed="cardOne.isClosed"
          :restaurant="cardOne.restaurant"
          :image="cardOne.image"
          />
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
              <h2 class="bi bi-caret-up-fill"></h2>
            </div>
          </div>
          <CardGroup 
          :isClosed="cardTwo.isClosed"
          :restaurant="cardTwo.restaurant"
          :image="cardTwo.image"
          />
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
