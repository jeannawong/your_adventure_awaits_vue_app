<template>
  <div class="orders-index">
    <h1>Your Orders</h1>
    <div v-for="order in orders" v-bind:key="order.id">
      <br />
      <h2>{{ order.journey.name }}</h2>
      <img v-bind:src="order.journey.images[0].url" v-bind:alt="order.journey.name" />
      <p>
        <b>Subtotal:</b>
        ${{ order.subtotal }}0
      </p>
      <p>
        <b>Tax:</b>
        ${{ order.tax }}0
      </p>
      ---------------------------
      <p>
        <b>Total:</b>
        ${{ order.total }}0
      </p>
      <button class="btn btn-primary">Buy</button>
      <button class="btn btn-primary">Delete</button>
      <br />
    </div>
  </div>
</template>

<style scoped>
img {
  height: 100px;
  width: 100px;
}
</style>

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
