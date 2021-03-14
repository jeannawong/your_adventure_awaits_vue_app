<template>
  <div class="orders-index">
    <h1>Your Orders</h1>
    <div v-for="order in orders" v-bind:key="order.id">
      <h2>{{ order.journey.name }}</h2>
      <img v-bind:src="order.journey.images[0].url" v-bind:alt="order.journey.name" />
      <p>Subtotal: {{ order.subtotal }}</p>
      <p>Tax: {{ order.tax }}</p>
      <p>Total: {{ order.total }}</p>
      <button class="btn btn-primary">Buy</button>
      <button class="btn btn-primary">Delete</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      orders: [],
    };
  },
  created: function() {
    axios.get("/api/orders").then(response => {
      console.log("orders index", response);
      this.orders = response.data;
    });
  },
  methods: {},
};
</script>
