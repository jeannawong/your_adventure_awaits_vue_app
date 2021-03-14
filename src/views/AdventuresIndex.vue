<template>
  <div class="adventures-index">
    <h1>My Adventures</h1>
    <div v-for="adventure in adventures" v-bind:key="adventure.id">
      <h2>{{ adventure.journey.name }}</h2>
      <img v-bind:src="order.journey.images[0].url" v-bind:alt="order.journey.name" />
      <p>Subtotal: {{ order.subtotal }}</p>
      <p>Tax: {{ order.tax }}</p>
      <p>Total: {{ order.total }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      adventures: [],
    };
  },
  created: function() {
    axios.get("/api/adventures").then(response => {
      console.log("adventures index", response);
      this.adventures = response.data;
    });
  },
  methods: {},
};
</script>
