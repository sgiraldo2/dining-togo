<script setup>
import { useCartStore } from '~/store/cart';
const cart = useCartStore();
</script>

<template>
  <!-- NOTE: Button trigger done somewhere else -SG -->
  <!-- Button trigger modal -->
  <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#customize">
    Launch demo modal
  </button> -->

  <!-- Modal -->
  <div
    class="modal fade"
    id="customize"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="customizeLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="customizeLabel">Customize Order:</h1>
        </div>
        <div class="modal-body">
          <div v-for="item in cart.items" :key="item.id" class="pb-3">
            <h3>{{ item.name }}</h3>
            <div v-for="customization in item.customizations" class="ms-4">
              {{ customization.name }}:
              <div v-for="option in customization.options">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    :name="item.name + customization.name"
                    :id="item.name + customization.name + option"
                    :checked="customization.default == option"
                  />
                  <label class="form-check-label" :for="item.name + customization.name + option"> {{ option }} </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Apply</button>
        </div>
      </div>
    </div>
  </div>
</template>
