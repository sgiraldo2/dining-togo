<script setup>
const { starbucksData } = defineProps(['starbucksData']);
const starbucksDrinks = starbucksData.menus[0];
const starbucksFood = starbucksData.menus[1];
const starbucksAtHomeCoffee = starbucksData.menus[2];
const starbucksMerchandise = starbucksData.menus[3];
</script>

<template>
  <div class="accordion" id="accordionPanelsStayOpenExample">
    <div class="accordion-item" v-for="menus in starbucksData.menus">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#panelsStayOpen-` + menus.id"
          aria-expanded="false"
          aria-controls="`panelsStayOpen-` + menus.id"
        >
          {{ menus.name }}
        </button>
      </h2>
      <div :id="`panelsStayOpen-` + menus.id" class="accordion-collapse collapse">
        <div class="accordion-body">
          <!-- Categories -->
          <div class="accordion" id="accordionPanelsStayOpenTwo">
            <div class="accordion-item" v-for="categories in menus.children">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#panelsStayOpenTwo-` + menus.id + categories.id"
                  aria-expanded="false"
                  aria-controls="`panelsStayOpenTwo-` + menus.id + categories.id"
                >
                  {{ categories.name }}
                </button>
              </h2>
              <div :id="`panelsStayOpenTwo-` + menus.id + categories.id" class="accordion-collapse collapse">
                <div class="accordion-body">
                  <!-- Products -->
                  <div v-for="item in categories.products.length > 0 ? categories.products : categories.children">
                    <div v-if="categories.products.length > 0">
                      <div class="card mb-3" style="max-width: 540px">
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img :src="item.assets.masterImage.uri" class="img-fluid rounded-start" alt="..." />
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title">{{ item.name }}</h5>
                              <!-- <p class="card-text">
                              This is a wider card with supporting text below as a natural lead-in to additional
                              content. This content is a little bit longer.
                            </p>
                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> -->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-else>
                      <!-- Categories with children as item -->
                      <div class="accordion" id="accordionPanelsStayOpenThree">
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              :data-bs-target="`#panelsStayOpenThree-` + menus.id + categories.id + item.id"
                              aria-expanded="false"
                              aria-controls="`panelsStayOpenThree-` + menus.id + categories.id + item.id"
                            >
                              {{ item.name }}
                            </button>
                          </h2>
                          <div
                            :id="`panelsStayOpenThree-` + menus.id + categories.id + item.id"
                            class="accordion-collapse collapse"
                          >
                            <div class="accordion-body">
                              <!-- Products -->
                              <div
                                v-for="itemProduct in item.products"
                              >
                                <div class="card mb-3" style="max-width: 540px">
                                  <div class="row g-0">
                                    <div class="col-md-4">
                                      <img :src="itemProduct.assets.masterImage.uri" class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                      <div class="card-body">
                                        <h5 class="card-title">{{ itemProduct.name }}</h5>
                                        <!-- <p class="card-text">
                                          This is a wider card with supporting text below as a natural lead-in to additional
                                          content. This content is a little bit longer.
                                        </p>
                                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> -->
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
